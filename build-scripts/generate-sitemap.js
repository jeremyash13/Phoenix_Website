import { create } from 'xmlbuilder2';
import fs from 'fs';

console.log('Generating sitemap...');

let urlset = create({ encoding: 'UTF-8' }).ele('urlset');
urlset.att('xmlns', 'https://www.sitemaps.org/schemas/sitemap/0.9');
urlset.att('xmlns:news', 'https://www.google.com/schemas/sitemap-news/0.9');
urlset.att('xmlns:xhtml', 'https://www.w3.org/1999/xhtml');
urlset.att('xmlns:mobile', 'https://www.google.com/schemas/sitemap-mobile/1.0');
urlset.att('xmlns:image', 'https://www.google.com/schemas/sitemap-image/1.1');
urlset.att('xmlns:video', 'https://www.google.com/schemas/sitemap-video/1.1');

// Hardcoded paths
appendPath('https://www.phoenixblocker.com');
appendPath('https://www.phoenixblocker.com/features');
appendPath('https://www.phoenixblocker.com/pricing');
// appendPath("https://www.phoenixblocker.com/guide");
appendPath('https://www.phoenixblocker.com/privacy');
// appendPath("https://www.phoenixblocker.com/release-notes");
appendPath('https://www.phoenixblocker.com/blog/1');

// generated paths (blog posts)
const postsDir = './src/posts';
fs.readdir(postsDir, (err, files) => {
	if (err) console.log(err);
	else {
		files.forEach((file) => {
			const post = file.replace(/\.md$/, ''); // Remove .md file extension
			const slug = 'https://www.phoenixblocker.com/posts/' + entityEscape(post);
			appendPath(slug);
		});
		const xml = urlset.end({ prettyPrint: true });
		// console.log(xml);
		fs.writeFileSync('./static/phoenix-sitemap.xml', xml);
		console.log('Sitemap generation complete.');
	}
});

function entityEscape(url) {
	return url.replace(/[<&'">]/g, function (match) {
		switch (match) {
			case '&':
				return '&amp;';
			case '<':
				return '&lt;';
			case '>':
				return '&gt;';
			case "'":
				return '&apos;';
			case '"':
				return '&quot;';
			default:
				return match;
		}
	});
}

function appendPath(slug) {
	console.log('Found path ' + slug);

	let date = new Date();
	let formattedDate = `${date.getFullYear()}-${getMonth()}-${getDate()}`;
	const url = urlset.ele('url');

	const loc = url.ele('loc').txt(slug);
	const changefreq = url.ele('changefreq').txt('daily');
	const lastmod = url.ele('lastmod').txt(formattedDate);

	function getMonth() {
		let monthString = '';
		let month = date.getMonth();

		month++;

		if (month < 10) {
			monthString = '0' + month.toString();
		} else {
			monthString = month.toString();
		}

		return monthString;
	}

	function getDate() {
		let dateString = '';
		let day = date.getDate();

		if (day < 10) {
			dateString = '0' + day.toString();
		} else {
			dateString = day.toString();
		}

		return dateString;
	}
}
