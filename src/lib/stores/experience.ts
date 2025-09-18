import {
	DateLocaleValue,
	generateLocaleItemsDerived,
	TextLocaleValue,
	UnlocaleValue,
	type ILocaleItem,
	type IResultLocaleItem
} from './locale';

interface ExperienceItemRaw extends ILocaleItem {
	startDate: DateLocaleValue;
	endDate: DateLocaleValue;
	position: UnlocaleValue;
	company: UnlocaleValue;
	description: TextLocaleValue;
}

export interface ExperienceItem extends IResultLocaleItem<ExperienceItemRaw> {
	startDate: string;
	endDate: string;
	position: string;
	description: string;
}

const experienceItemRaws: ExperienceItemRaw[] = [
	{
		startDate: DateLocaleValue.mmmmYyyy(new Date('2025-01-01')),
		endDate: DateLocaleValue.now(),
		position: new UnlocaleValue('Fullstack Engineer'),
		company: new UnlocaleValue('Digital Exceleration Nusantara'),
		description: new TextLocaleValue({
			en: 'Responsible for developing and maintaining banking projects, leveraging microservice architecture to improve scalability and system performance.',
			id: 'Bertanggung jawab untuk mengembangkan dan memelihara proyek perbankan, memanfaatkan arsitektur layanan mikro untuk meningkatkan skalabilitas dan kinerja sistem.'
		})
	},
	{
		startDate: DateLocaleValue.mmmmYyyy(new Date('2024-01-01')),
		endDate: DateLocaleValue.mmmmYyyy(new Date('2024-12-01')),
		position: new UnlocaleValue('Mobile Developer'),
		company: new UnlocaleValue('Matrica Consulting Service'),
		description: new TextLocaleValue({
			en: 'Mobile Developer specializing in implementing Odoo modules into mobile applications using Flutter, developing REST APIs for integration with the Odoo system, building unit tests for feature validation, implementing CI/CD pipelines via GitLab CI, and maintaining applications through regular debugging, bug fixing, and updates.',
			id: 'Pengembang Seluler yang mengkhususkan diri dalam penerapan modul Odoo ke dalam aplikasi seluler menggunakan Flutter, mengembangkan REST API untuk integrasi dengan sistem Odoo, membangun pengujian unit untuk validasi fitur, menerapkan jalur CI/CD melalui GitLab CI, dan memelihara aplikasi melalui penelusuran kesalahan, perbaikan bug, dan pembaruan rutin.'
		})
	},
	{
		startDate: DateLocaleValue.mmmmYyyy(new Date('2023-07-01')),
		endDate: DateLocaleValue.mmmmYyyy(new Date('2023-12-01')),
		position: new UnlocaleValue('Mobile Developer'),
		company: new UnlocaleValue('Terralogiq'),
		description: new TextLocaleValue({
			en: 'Mobile Developer responsible for maintaining and developing the Tapera Mobile application with advanced security features, developing PIC Bank applications for financing monitoring, building applications for housing developers, and providing post-launch technical support.',
			id: 'Pengembang Seluler yang bertanggung jawab untuk memelihara dan mengembangkan aplikasi Tapera Mobile dengan fitur keamanan tingkat lanjut, mengembangkan aplikasi PIC Bank untuk pemantauan pembiayaan, membangun aplikasi untuk pengembang perumahan, dan menyediakan dukungan teknis pasca-peluncuran.'
		})
	},
	{
		startDate: DateLocaleValue.mmmmYyyy(new Date('2023-01-01')),
		endDate: DateLocaleValue.mmmmYyyy(new Date('2023-06-01')),
		position: new UnlocaleValue('Frontend Developer'),
		company: new UnlocaleValue('Tema Data Rekayasa Digital'),
		description: new TextLocaleValue({
			en: 'Mobile Developer responsible for maintaining and developing the Tapera Mobile application with advanced security features, developing PIC Bank applications for financing monitoring, building applications for housing developers, and providing post-launch technical support.',
			id: 'Pengembang Seluler yang bertanggung jawab untuk memelihara dan mengembangkan aplikasi Tapera Mobile dengan fitur keamanan tingkat lanjut, mengembangkan aplikasi PIC Bank untuk pemantauan pembiayaan, membangun aplikasi untuk pengembang perumahan, dan menyediakan dukungan teknis pasca-peluncuran.'
		})
	},
	// {
	// 	startDate: DateLocaleValue.mmmmYyyy(new Date('2022-09-01')),
	// 	endDate: DateLocaleValue.mmmmYyyy(new Date('2023-03-01')),
	// 	position: new UnlocaleValue('Mobile Developer'),
	// 	company: new UnlocaleValue('Solusi Digital Industri'),
	// 	description: new TextLocaleValue({
	// 		en: 'Mobile Developer responsible for building freelance platform applications and online payment services, implementing data streaming and push notifications, conducting testing and debugging, and maintaining high system reliability through close teamwork.',
	// 		id: 'Pengembang Seluler yang bertanggung jawab untuk membangun aplikasi platform lepas dan layanan pembayaran daring, menerapkan streaming data dan pemberitahuan push, melakukan pengujian dan debugging, dan menjaga keandalan sistem yang tinggi melalui kerja sama tim yang erat.'
	// 	})
	// },
	{
		startDate: DateLocaleValue.mmmmYyyy(new Date('2021-02-01')),
		endDate: DateLocaleValue.mmmmYyyy(new Date('2021-04-01')),
		position: new UnlocaleValue('Data Engineer Internship'),
		company: new UnlocaleValue('Xeratic'),
		description: new TextLocaleValue({
			en: 'Data Engineer Intern performing data transformations using Pentaho, developing R scripts for data manipulation and statistical analysis, and receiving recognition for consumer-oriented performance.',
			id: 'Insinyur Data Magang melakukan transformasi data menggunakan Pentaho, mengembangkan skrip R untuk manipulasi data dan analisis statistik, dan menerima pengakuan atas kinerja yang berorientasi pada konsumen.'
		})
	}
];

export const experienceItems = generateLocaleItemsDerived<ExperienceItemRaw, ExperienceItem>(
	experienceItemRaws
);
