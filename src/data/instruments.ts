export type InstrumentCategory =
	| 'pipetting'
	| 'weighing'
	| 'heating'
	| 'electrochemistry';

export interface InstrumentSpec {
	label: { en: string; ar: string };
	value: string;
}

export interface Instrument {
	id: string;
	code: string;
	category: InstrumentCategory;
	image: string;
	specs: InstrumentSpec[];
	name: { en: string; ar: string };
	description: { en: string; ar: string };
	applications: string[];
}

export const instruments: Instrument[] = [
	{
		id: 'inst-p-001',
		code: 'TM-I-P-001',
		category: 'pipetting',
		image: '/Homepage Pics/Labware/Instruments/ISO LAB Micro Pipette Single Channel.jpg', // Replace with your actual image path
		specs: [
			{
				label: { en: 'Volume', ar: 'الحجم' },
				value: '10 - 100 µL',
			},
			{
				label: { en: 'Autoclavable', ar: 'قابل للتعقيم' },
				value: 'Yes (Fully)',
			}
		],
		name: {
			en: 'Micropipette, Single Channel',
			ar: 'ماصة دقيقة أحادية القناة',
		},
		description: {
			en: 'High-precision single channel micropipette for accurate liquid handling.',
			ar: 'ماصة دقيقة أحادية القناة عالية الدقة للتعامل مع السوائل.',
		},
		applications: ['Liquid Handling', 'Sample Prep'],
	},
	{
		id: 'inst-p-002',
		code: 'ISOLAB-011.01',
		category: 'pipetting',
		image: '/Homepage Pics/Labware/Instruments/ISO LAB Micro Pipette Single Channel Adj.jpg',
		specs: [
			{
				label: { en: 'Volume Range', ar: 'نطاق الحجم' },
				value: '0.1 µL - 10 mL (Various Models)',
			},
			{
				label: { en: 'Autoclavable', ar: 'قابل للتعقيم' },
				value: 'Fully Autoclavable (121°C)',
			},
			{
				label: { en: 'Ergonomics', ar: 'التصميم المريح' },
				value: 'Ultra-lightweight',
			}
		],
		name: {
			en: 'ISOLAB Adjustable Volume Micropipette',
			ar: 'ماصّة دقيقة متغيرة الحجم أيزولاب',
		},
		description: {
			en: 'High-precision adjustable volume micropipettes featuring an ergonomic, ultra-lightweight design for comfortable prolonged use. Fully autoclavable without disassembly.',
			ar: 'ماصّات دقيقة متغيرة الحجم وعالية الدقة تتميز بتصميم مريح وخفيف الوزن للغاية لراحة الاستخدام لفترات طويلة. قابلة للتعقيم بالكامل دون تفكيك.',
		},
		applications: ['Molecular Biology', 'Clinical Diagnostics', 'Routine Liquid Handling'],
	},
	{
		id: 'inst-p-003',
		code: 'ISOLAB-010.01',
		category: 'pipetting',
		image: '/Homepage Pics/Labware/Instruments/ISO LAb Manual.jpg',
		specs: [
			{
				label: { en: 'Capacity', ar: 'السعة' },
				value: 'Up to 25 mL',
			},
			{
				label: { en: 'Control', ar: 'التحكم' },
				value: 'Thumb-wheel / Release Valve',
			}
		],
		name: {
			en: 'ISOLAB Pipette Pump (Manual Controller)',
			ar: 'مضخة ماصّة أيزولاب (تحكم يدوي)',
		},
		description: {
			en: 'Manual pipette pump providing easy, one-handed operation. The thumb-wheel ensures precise filling and dispensing, while the quick-release valve enables rapid emptying.',
			ar: 'مضخة ماصّة يدوية توفر تشغيلاً سهلاً بيد واحدة. تضمن عجلة الإبهام تعبئة وتوزيعاً دقيقين، بينما يتيح صمام التحرير السريع التفريغ السريع.',
		},
		applications: ['Cell Culture', 'General Serology', 'Buffer Transfer'],
	},
	{
		id: 'inst-p-004',
		code: 'ISOLAB-009.01',
		category: 'pipetting',
		image: '/Homepage Pics/Labware/Instruments/Pipette controller.jpg',
		specs: [
			{
				label: { en: 'Compatibility', ar: 'التوافق' },
				value: '0.1 - 100 mL Glass/Plastic Pipettes',
			},
			{
				label: { en: 'Speed', ar: 'السرعة' },
				value: 'Adjustable aspiration/dispensing',
			}
		],
		name: {
			en: 'ISOLAB Electronic Pipette Controller',
			ar: 'جهاز تحكم إلكتروني للماصّات أيزولاب',
		},
		description: {
			en: 'Cordless, lightweight electronic pipette controller with LCD display. Features adjustable speed settings and gravity/blow-out dispensing modes for optimal precision.',
			ar: 'جهاز تحكم إلكتروني للماصّات لاسلكي وخفيف الوزن مزود بشاشة LCD. يتميز بإعدادات سرعة قابلة للتعديل وأوضاع توزيع بالجاذبية/الدفع لدقة مثالية.',
		},
		applications: ['Cell Culture', 'High-Volume Liquid Transfer'],
	},
	{
		id: 'inst-p-005',
		code: 'ISOLAB-008.01',
		category: 'pipetting',
		image: '/Homepage Pics/Labware/Instruments/ISO Lab Dispenser.jpg',
		specs: [
			{
				label: { en: 'Volume Range', ar: 'نطاق الحجم' },
				value: '0.25 - 50 mL (Various Models)',
			},
			{
				label: { en: 'Chemical Resistance', ar: 'المقاومة الكيميائية' },
				value: 'High (PTFE, PFA, FEP, Borosilicate)',
			}
		],
		name: {
			en: 'ISOLAB Bottle Top Dispenser',
			ar: 'موزع سوائل أعلى الزجاجة أيزولاب',
		},
		description: {
			en: 'Highly chemical-resistant bottle top dispenser designed for safe, reproducible dispensing of reagents, acids, and solvents. Includes recirculation valve to prevent reagent loss.',
			ar: 'موزع سوائل يُركب على الزجاجة ذو مقاومة كيميائية عالية، مصمم للتوزيع الآمن والقابل للتكرار للكواشف والأحماض والمذيبات. يشمل صمام إعادة تدوير لمنع فقدان الكواشف.',
		},
		applications: ['Acid/Base Dispensing', 'Solvent Handling', 'Analytical Prep'],
	},
	{
		id: 'inst-p-006',
		code: 'RAININ-PLXLS',
		category: 'pipetting',
		image: '/Homepage Pics/Labware/Instruments/Rainin Pipet-Lite XLS+ Single Channel.jpg',
		specs: [
			{
				label: { en: 'Volume Range', ar: 'نطاق الحجم' },
				value: '0.1 µL - 20 mL (Various Models)',
			},
			{
				label: { en: 'Tip System', ar: 'نظام الأطراف' },
				value: 'LTS (LiteTouch System)',
			},
			{
				label: { en: 'Calibration', ar: 'المعايرة' },
				value: 'Embedded RFID Tag',
			}
		],
		name: {
			en: 'Rainin Pipet-Lite XLS+ Single Channel',
			ar: 'ماصة رينين بايبت-لايت XLS+ أحادية القناة',
		},
		description: {
			en: 'Renowned for its extremely low spring forces and ergonomic design, the Pipet-Lite XLS+ ensures highly accurate and precise pipetting with an RFID tag for easy calibration tracking.',
			ar: 'تشتهر بقوى الزنبرك المنخفضة للغاية والتصميم المريح، وتضمن بايبت-لايت XLS+ سحب سوائل بدقة عالية جداً مع علامة RFID لتتبع المعايرة بسهولة.',
		},
		applications: ['General Liquid Handling', 'High-throughput pipetting', 'Molecular Biology'],
	},
	{
		id: 'inst-p-007',
		code: 'RAININ-E4XLS',
		category: 'pipetting',
		image: '/Homepage Pics/Labware/Instruments/Rainin E4 XLS+ Electronic Pipette.jpg',
		specs: [
			{
				label: { en: 'Volume Range', ar: 'نطاق الحجم' },
				value: '0.5 µL - 20 mL (Various Models)',
			},
			{
				label: { en: 'Modes', ar: 'الأوضاع' },
				value: 'Pipette, Multi-dispense, Titrate, Dilute',
			},
			{
				label: { en: 'Control', ar: 'التحكم' },
				value: 'Joystick / Digital Display',
			}
		],
		name: {
			en: 'Rainin E4 XLS+ Electronic Pipette',
			ar: 'ماصة رينين E4 XLS+ الإلكترونية',
		},
		description: {
			en: 'Advanced electronic pipette with joystick control, offering multiple modes including continuous dispensing, mixing, and titration for maximum workflow efficiency and reproducibility.',
			ar: 'ماصة إلكترونية متقدمة بتحكم عبر عصا توجيه، توفر أوضاعاً متعددة تشمل التوزيع المستمر، والخلط، والمعايرة لأقصى كفاءة وإمكانية تكرار في سير العمل.',
		},
		applications: ['Complex Liquid Handling', 'Serial Dispensing', 'Titration'],
	},
	{
		id: 'inst-p-008',
		code: 'RAININ-PLXLS-MULTI',
		category: 'pipetting',
		image: '/Homepage Pics/Labware/Instruments/Multichannel.jpg',
		specs: [
			{
				label: { en: 'Channels', ar: 'القنوات' },
				value: '8 or 12 channels',
			},
			{
				label: { en: 'Volume Range', ar: 'نطاق الحجم' },
				value: '1 µL - 1200 µL (Various Models)',
			},
			{
				label: { en: 'Tip System', ar: 'نظام الأطراف' },
				value: 'LTS (LiteTouch System)',
			}
		],
		name: {
			en: 'Rainin Pipet-Lite XLS+ Multichannel',
			ar: 'ماصة رينين بايبت-لايت XLS+ متعددة القنوات',
		},
		description: {
			en: 'Ergonomic multichannel pipette providing consistent sample pickup and dispensing across all channels. Features LTS technology to drastically reduce tip ejection force.',
			ar: 'ماصة متعددة القنوات مريحة توفر سحباً وتوزيعاً متسقاً للعينات عبر جميع القنوات. تتميز بتقنية LTS لتقليل قوة طرد الطرف بشكل كبير.',
		},
		applications: ['Microplate Work', 'ELISA', 'PCR Setup'],
	},
	
	// ── Weighing Instruments ─────────────────────────────────────────────────────
	{
		id: 'inst-w-001',
		code: 'BEL-M214A',
		category: 'weighing',
		image: '/Homepage Pics/Labware/Instruments/BEL Analytical Balance — M Series 220.jpg',
		specs: [
			{
				label: { en: 'Capacity', ar: 'السعة' },
				value: '220 g',
			},
			{
				label: { en: 'Readability', ar: 'الدقة' },
				value: '0.1 mg',
			},
			{
				label: { en: 'Calibration', ar: 'المعايرة' },
				value: 'Internal automatic',
			}
		],
		name: {
			en: 'BEL Analytical Balance — M Series',
			ar: 'ميزان تحليلي بيل — سلسلة M',
		},
		description: {
			en: 'High-performance analytical balance equipped with an electromagnetic force restoration weighing cell, internal automatic calibration, and an RS232 interface for reliable daily lab routines.',
			ar: 'ميزان تحليلي عالي الأداء مزود بخلية وزن باسترجاع القوة الكهرومغناطيسية، ومعايرة داخلية تلقائية، وواجهة RS232 لروتين المختبر اليومي الموثوق.',
		},
		applications: ['Analytical Weighing', 'Sample Prep', 'Quantitative Analysis'],
	},
	{
		id: 'inst-w-002',
		code: 'BEL-L2102',
		category: 'weighing',
		image: '/Homepage Pics/Labware/Instruments/BEL Toploading Precision Balance — L Series 2100.jpg',
		specs: [
			{
				label: { en: 'Capacity', ar: 'السعة' },
				value: '2100 g',
			},
			{
				label: { en: 'Readability', ar: 'الدقة' },
				value: '0.01 g',
			},
			{
				label: { en: 'Pan Size', ar: 'حجم الكفة' },
				value: '130 mm',
			}
		],
		name: {
			en: 'BEL Toploading Precision Balance — L Series',
			ar: 'ميزان دقة علوي بيل — سلسلة L',
		},
		description: {
			en: 'A reliable, easy-to-use toploading precision balance with a rugged design. Ideal for fast, accurate routine weighing and formulation tasks.',
			ar: 'ميزان دقة علوي موثوق وسهل الاستخدام بتصميم متين. مثالي لمهام الوزن الروتينية والتحضير السريعة والدقيقة.',
		},
		applications: ['Routine Weighing', 'Formulation', 'Buffer Preparation'],
	},
	{
		id: 'inst-w-003',
		code: 'BEL-HP105A',
		category: 'weighing',
		image: '/Homepage Pics/Labware/Instruments/BEL Semi-Micro Balance — HP Series 102.jpg',
		specs: [
			{
				label: { en: 'Capacity', ar: 'السعة' },
				value: '102 g',
			},
			{
				label: { en: 'Readability', ar: 'الدقة' },
				value: '0.01 mg',
			},
			{
				label: { en: 'Calibration', ar: 'المعايرة' },
				value: 'Internal automatic',
			}
		],
		name: {
			en: 'BEL Semi-Micro Balance — HP Series',
			ar: 'ميزان شبه ميكرو بيل — سلسلة HP',
		},
		description: {
			en: 'Exceptional precision semi-micro balance offering 0.01 mg readability. Features advanced digital processing for highly stable readings of micro-volumes.',
			ar: 'ميزان شبه ميكرو بدقة استثنائية تصل إلى 0.01 مجم. يتميز بمعالجة رقمية متقدمة لقراءات عالية الاستقرار للكميات الدقيقة جداً.',
		},
		applications: ['Micro-volume Weighing', 'Standard Preparation', 'Trace Analysis'],
	},
	{
		id: 'inst-w-004',
		code: 'KERN-ABJ',
		category: 'weighing',
		image: '/Homepage Pics/Labware/Instruments/KERN ABJ Analytical Balance.jpg',
		specs: [
			{
				label: { en: 'Capacity', ar: 'السعة' },
				value: '220 g',
			},
			{
				label: { en: 'Readability', ar: 'الدقة' },
				value: '0.1 mg',
			},
			{
				label: { en: 'Calibration', ar: 'المعايرة' },
				value: 'Internal automatic',
			}
		],
		name: {
			en: 'KERN ABJ Analytical Balance',
			ar: 'ميزان تحليلي كيرن ABJ',
		},
		description: {
			en: 'Premium analytical balance with advanced single-cell technology for rapid and stable weighing results.',
			ar: 'ميزان تحليلي متميز بتقنية الخلية الواحدة المتقدمة للحصول على نتائج وزن سريعة ومستقرة.',
		},
		applications: ['Analytical Weighing', 'Laboratory', 'High Precision'],
	},
	{
		id: 'inst-w-005',
		code: 'AND-GF',
		category: 'weighing',
		image: '/Homepage Pics/Labware/Instruments/A&D GF Series Precision Balance 3200g.jpg',
		specs: [
			{
				label: { en: 'Capacity', ar: 'السعة' },
				value: '3200 g',
			},
			{
				label: { en: 'Readability', ar: 'الدقة' },
				value: '0.01 g',
			},
			{
				label: { en: 'Sensor', ar: 'المستشعر' },
				value: 'Super Hybrid Sensor (SHS)',
			}
		],
		name: {
			en: 'A&D GF Series Precision Balance',
			ar: 'ميزان دقة A&D سلسلة GF',
		},
		description: {
			en: 'Fast and highly robust precision balance featuring A&D\'s Super Hybrid Sensor (SHS) for incredibly fast response times.',
			ar: 'ميزان دقة سريع وقوي للغاية يتميز بمستشعر هجين فائق (SHS) من A&D لأوقات استجابة سريعة بشكل لا يصدق.',
		},
		applications: ['Industrial Weighing', 'Formulation', 'General Lab Use'],
	},
	{
		id: 'inst-w-006',
		code: 'RADWAG-MYA',
		category: 'weighing',
		image: '/Homepage Pics/Labware/Instruments/RADWAG MYA Microbalance 21g.jpg',
		specs: [
			{
				label: { en: 'Capacity', ar: 'السعة' },
				value: '21 g',
			},
			{
				label: { en: 'Readability', ar: 'الدقة' },
				value: '1 µg (0.001 mg)',
			},
			{
				label: { en: 'Display', ar: 'الشاشة' },
				value: '5.7" Touchscreen',
			}
		],
		name: {
			en: 'RADWAG MYA Microbalance',
			ar: 'ميزان ميكرو رادواغ MYA',
		},
		description: {
			en: 'State-of-the-art microbalance designed to meet the highest requirements for determining the mass of extremely small samples.',
			ar: 'ميزان ميكرو حديث مصمم لتلبية أعلى المتطلبات لتحديد كتلة العينات الصغيرة للغاية.',
		},
		applications: ['Micro-weighing', 'Filter Weighing', 'Stent Weighing'],
	},
	{
		id: 'inst-w-007',
		code: 'AND-BM-252',
		category: 'weighing',
		image: '/Homepage Pics/Labware/Instruments/A&D BM Series Micro Analytical Balance 250.jpg',
		specs: [
			{
				label: { en: 'Capacity', ar: 'السعة' },
				value: '250 g',
			},
			{
				label: { en: 'Readability', ar: 'الدقة' },
				value: '0.01 mg',
			},
			{
				label: { en: 'Features', ar: 'الميزات' },
				value: 'Built-in Fanless Ionizer',
			}
		],
		name: {
			en: 'A&D BM Series Micro Analytical Balance',
			ar: 'ميزان تحليلي دقيق A&D سلسلة BM',
		},
		description: {
			en: 'High-precision micro analytical balance featuring a built-in fanless ionizer to eliminate static electricity errors instantly.',
			ar: 'ميزان تحليلي دقيق عالي الدقة يتميز بمؤين مدمج بدون مروحة للقضاء على أخطاء الكهرباء الساكنة على الفور.',
		},
		applications: ['Micro-weighing', 'Filter Weighing', 'High-precision Analysis'],
	},
	{
		id: 'inst-w-008',
		code: 'AND-FX-3000i',
		category: 'weighing',
		image: '/Homepage Pics/Labware/Instruments/A&D FX-i Series Precision Balance.jpg',
		specs: [
			{
				label: { en: 'Capacity', ar: 'السعة' },
				value: '3200 g',
			},
			{
				label: { en: 'Readability', ar: 'الدقة' },
				value: '0.01 g',
			},
			{
				label: { en: 'Sensor', ar: 'المستشعر' },
				value: 'Compact SHS',
			}
		],
		name: {
			en: 'A&D FX-i Series Precision Balance',
			ar: 'ميزان دقة A&D سلسلة FX-i',
		},
		description: {
			en: 'Compact precision balance with Compact Super Hybrid Sensor (C-SHS) providing an ultra-fast 1-second stabilization time.',
			ar: 'ميزان دقة مدمج مزود بمستشعر هجين فائق مدمج (C-SHS) يوفر وقت استقرار فائق السرعة يبلغ ثانية واحدة.',
		},
		applications: ['Routine Laboratory', 'Industrial Weighing', 'Educational'],
	},
	{
		id: 'inst-w-009',
		code: 'AND-MS-70',
		category: 'weighing',
		image: '/Homepage Pics/Labware/Instruments/A&D MS-70 Moisture Analyzer 71g.jpg',
		specs: [
			{
				label: { en: 'Capacity', ar: 'السعة' },
				value: '71 g',
			},
			{
				label: { en: 'Moisture Readability', ar: 'دقة الرطوبة' },
				value: '0.001%',
			},
			{
				label: { en: 'Heating', ar: 'التسخين' },
				value: 'Halogen Lamp',
			}
		],
		name: {
			en: 'A&D MS-70 Moisture Analyzer',
			ar: 'محلل رطوبة A&D MS-70',
		},
		description: {
			en: 'High-precision moisture analyzer with Fast Super Hybrid Sensor (SHS) and halogen heating for rapid, reproducible drying.',
			ar: 'محلل رطوبة عالي الدقة مزود بمستشعر هجين فائق السرعة (SHS) وتسخين هالوجين لتجفيف سريع وقابل للتكرار.',
		},
		applications: ['Moisture Determination', 'Food Analysis', 'Pharma QC'],
	},
	{
		id: 'inst-w-010',
		code: 'RADWAG-AS-3Y',
		category: 'weighing',
		image: '/Homepage Pics/Labware/Instruments/RADWAG AS 3Y Analytical Balance.jpg',
		specs: [
			{
				label: { en: 'Capacity', ar: 'السعة' },
				value: '220 g',
			},
			{
				label: { en: 'Readability', ar: 'الدقة' },
				value: '0.1 mg',
			},
			{
				label: { en: 'Display', ar: 'الشاشة' },
				value: '5.7" Touchscreen',
			}
		],
		name: {
			en: 'RADWAG AS 3Y Analytical Balance',
			ar: 'ميزان تحليلي رادواغ AS 3Y',
		},
		description: {
			en: 'Professional analytical balance featuring an interactive touchscreen display, extensive databases, and automatic leveling system.',
			ar: 'ميزان تحليلي احترافي يتميز بشاشة لمس تفاعلية، وقواعد بيانات واسعة، ونظام تسوية تلقائي.',
		},
		applications: ['Analytical Chemistry', 'Pharma QC', 'Formulation'],
	},
	{
		id: 'inst-w-011',
		code: 'RADWAG-PS-3Y',
		category: 'weighing',
		image: '/Homepage Pics/Labware/Instruments/RADWAG PS 3Y Precision Balance.jpg',
		specs: [
			{
				label: { en: 'Capacity', ar: 'السعة' },
				value: '1000 g - 6000 g',
			},
			{
				label: { en: 'Readability', ar: 'الدقة' },
				value: '0.001 g - 0.01 g',
			},
			{
				label: { en: 'Connectivity', ar: 'الاتصال' },
				value: 'Wi-Fi, Ethernet, USB',
			}
		],
		name: {
			en: 'RADWAG PS 3Y Precision Balance',
			ar: 'ميزان دقة رادواغ PS 3Y',
		},
		description: {
			en: 'Advanced precision balance with a large weighing pan, intuitive touch interface, and comprehensive GLP/GMP compliance data logging.',
			ar: 'ميزان دقة متقدم مع كفة وزن كبيرة، وواجهة لمس بديهية، وتسجيل بيانات شامل للامتثال لـ GLP/GMP.',
		},
		applications: ['General Laboratory', 'Quality Control', 'Sample Prep'],
	},
	{
		id: 'inst-w-012',
		code: 'RADWAG-MA-X2A',
		category: 'weighing',
		image: '/Homepage Pics/Labware/Instruments/RADWAG MA X2.A Moisture Analyzer.jpg',
		specs: [
			{
				label: { en: 'Capacity', ar: 'السعة' },
				value: '50 g - 210 g',
			},
			{
				label: { en: 'Moisture Readability', ar: 'دقة الرطوبة' },
				value: '0.001%',
			},
			{
				label: { en: 'Drying Chamber', ar: 'غرفة التجفيف' },
				value: 'Automated opening/closing',
			}
		],
		name: {
			en: 'RADWAG MA X2.A Moisture Analyzer',
			ar: 'محلل رطوبة رادواغ MA X2.A',
		},
		description: {
			en: 'Highly advanced moisture analyzer with automated opening and closing of the drying chamber and a highly legible touchscreen.',
			ar: 'محلل رطوبة متقدم للغاية مع فتح وإغلاق آلي لغرفة التجفيف وشاشة لمس واضحة جداً.',
		},
		applications: ['Moisture Content', 'Plastics Processing', 'Food Analysis'],
	},

	// ── Electrochemistry ─────────────────────────────────────────────────────────
	{
		id: 'inst-e-001',
		code: 'HORIBA-LAQUA-PH1100',
		category: 'electrochemistry',
		image: '/Homepage Pics/Labware/Instruments/HORIBA LAQUA Benchtop pH Meter.jpg',
		specs: [
			{
				label: { en: 'pH Range', ar: 'نطاق الـ pH' },
				value: '-2.000 to 20.000 pH',
			},
			{
				label: { en: 'Calibration', ar: 'المعايرة' },
				value: 'Up to 5 points',
			},
			{
				label: { en: 'Data Memory', ar: 'ذاكرة البيانات' },
				value: '1000 data points',
			}
		],
		name: {
			en: 'HORIBA LAQUA Benchtop pH/mV/Temp Meter',
			ar: 'جهاز قياس درجة الحموضة/ملي فولت/الحرارة المكتبي لاكوا من هوريبا',
		},
		description: {
			en: 'Advanced benchtop meter with an intuitive touchscreen, offering high-precision pH, mV, and temperature measurements. Includes data logging and electrode status indicators.',
			ar: 'جهاز مكتبي متقدم بشاشة لمس بديهية، يوفر قياسات عالية الدقة لدرجة الحموضة وملي فولت ودرجة الحرارة. يتضمن تسجيل البيانات ومؤشرات حالة القطب.',
		},
		applications: ['Water Quality Testing', 'Analytical Chemistry', 'Environmental Analysis'],
	},
	{
		id: 'inst-e-002',
		code: 'ADWA-AD8000',
		category: 'electrochemistry',
		image: '/Homepage Pics/Labware/Instruments/ADWA AD8000 Benchtop Multiparameter Meter.jpg',
		specs: [
			{
				label: { en: 'Parameters', ar: 'المعلمات' },
				value: 'pH / mV / EC / TDS / Temp',
			},
			{
				label: { en: 'EC Range', ar: 'نطاق الموصلية' },
				value: '0.00 to 19.99 mS/cm',
			},
			{
				label: { en: 'GLP Features', ar: 'ميزات GLP' },
				value: 'Yes',
			}
		],
		name: {
			en: 'ADWA AD8000 Benchtop Multiparameter Meter',
			ar: 'جهاز قياس متعدد المعلمات المكتبي AD8000 من أدوا',
		},
		description: {
			en: 'Microprocessor-based benchtop meter providing versatile multiparameter testing for pH, ORP, Conductivity, TDS, and Temperature with GLP capability.',
			ar: 'جهاز مكتبي يعتمد على المعالج الدقيق يوفر اختبارات متعددة المعلمات لدرجة الحموضة، ORP، الموصلية، TDS، ودرجة الحرارة مع إمكانيات GLP.',
		},
		applications: ['Routine Lab Testing', 'Agriculture', 'Water Treatment'],
	},
	{
		id: 'inst-e-003',
		code: 'HANNA-HI2020',
		category: 'electrochemistry',
		image: '/Homepage Pics/Labware/Instruments/Hanna edge® Multiparameter Meter.jpg',
		specs: [
			{
				label: { en: 'Design', ar: 'التصميم' },
				value: 'Ultra-thin, portable/benchtop',
			},
			{
				label: { en: 'Sensors', ar: 'المستشعرات' },
				value: 'Digital smart electrodes',
			},
			{
				label: { en: 'Connectivity', ar: 'الاتصال' },
				value: 'USB, data logging',
			}
		],
		name: {
			en: 'Hanna edge® Multiparameter Meter',
			ar: 'جهاز قياس متعدد المعلمات هانا إيدج®',
		},
		description: {
			en: 'Sleek and versatile multiparameter meter that can be used as a benchtop, portable, or wall-mounted unit. Uses advanced digital electrodes for pH, EC, or DO.',
			ar: 'جهاز قياس متعدد المعلمات أنيق ومتعدد الاستخدامات يمكن استخدامه كجهاز مكتبي أو محمول أو مثبت على الحائط. يستخدم أقطاباً رقمية متقدمة لقياس pH أو الموصلية (EC) أو الأكسجين المذاب (DO).',
		},
		applications: ['Field & Lab Analysis', 'Quality Control', 'Education'],
	},
	{
		id: 'inst-e-004',
		code: 'MT-S220',
		category: 'electrochemistry',
		image: '/Homepage Pics/Labware/Instruments/Mettler Toledo SevenCompact™ S220.jpg',
		specs: [
			{
				label: { en: 'pH Range', ar: 'نطاق الـ pH' },
				value: '-2.000 to 20.000 pH',
			},
			{
				label: { en: 'Ion Concentration', ar: 'تركيز الأيونات' },
				value: '1.00e-09 to 9.99e+09',
			},
			{
				label: { en: 'Compliance', ar: 'الامتثال' },
				value: 'GLP/GMP, 21 CFR Part 11',
			}
		],
		name: {
			en: 'Mettler Toledo SevenCompact™ S220',
			ar: 'جهاز سيفين كومباكت™ S220 من متلر توليدو',
		},
		description: {
			en: 'High-end, robust benchtop meter designed for a wide range of highly precise pH and ion concentration measurements. Intuitive operation and full GLP support.',
			ar: 'جهاز مكتبي متطور وقوي مصمم لمجموعة واسعة من قياسات درجة الحموضة وتركيز الأيونات عالية الدقة. تشغيل بديهي ودعم كامل لـ GLP.',
		},
		applications: ['Pharmaceutical QC', 'R&D', 'Advanced Electrochemistry'],
	},
	{
		id: 'inst-e-005',
		code: 'HANNA-HI991300',
		category: 'electrochemistry',
		image: '/Homepage Pics/Labware/Instruments/Hanna HI991300 Portable pH-EC-TDS -Temp Meter.jpg',
		specs: [
			{
				label: { en: 'Parameters', ar: 'المعلمات' },
				value: 'pH / EC / TDS / Temp',
			},
			{
				label: { en: 'IP Rating', ar: 'تصنيف الحماية' },
				value: 'IP67 (Waterproof)',
			},
			{
				label: { en: 'Probe', ar: 'المسبار' },
				value: 'Pre-amplified multiparameter',
			}
		],
		name: {
			en: 'Hanna HI991300 Portable pH/EC/TDS/Temp Meter',
			ar: 'جهاز هانا HI991300 المحمول لقياس درجة الحموضة والموصلية وTDS والحرارة',
		},
		description: {
			en: 'A lightweight, waterproof portable meter designed for versatile testing in the field or the lab. Features a rugged multiparameter probe.',
			ar: 'جهاز محمول خفيف الوزن ومقاوم للماء مصمم للاختبارات المتنوعة في الميدان أو المختبر. يتميز بمسبار متين متعدد المعلمات.',
		},
		applications: ['Field Testing', 'Water Treatment', 'Agriculture'],
	},
	{
		id: 'inst-e-006',
		code: 'MT-SD30',
		category: 'electrochemistry',
		image: '/Homepage Pics/Labware/Instruments/Mettler Toledo SevenDirect SD30 Conductivity Meter.jpg',
		specs: [
			{
				label: { en: 'Cond Range', ar: 'نطاق الموصلية' },
				value: '0.001 µS/cm – 2000 mS/cm',
			},
			{
				label: { en: 'Display', ar: 'الشاشة' },
				value: '7" color touchscreen',
			},
			{
				label: { en: 'Memory', ar: 'الذاكرة' },
				value: '1000 measurements',
			}
		],
		name: {
			en: 'Mettler Toledo SevenDirect SD30 Conductivity Meter',
			ar: 'جهاز سيفين دايركت SD30 لقياس الموصلية من متلر توليدو',
		},
		description: {
			en: 'Accurate and reliable benchtop conductivity meter featuring an intuitive touchscreen and easy data transfer for strict compliance.',
			ar: 'جهاز مكتبي دقيق وموثوق لقياس الموصلية يتميز بشاشة لمس بديهية وسهولة نقل البيانات لضمان الامتثال الصارم.',
		},
		applications: ['Quality Control', 'Environmental Analysis', 'Pharma QC'],
	},
	{
		id: 'inst-e-007',
		code: 'WTW-7110',
		category: 'electrochemistry',
		image: '/Homepage Pics/Labware/Instruments/WTW inoLab® pH 7110 Benchtop Meter.jpg',
		specs: [
			{
				label: { en: 'pH Range', ar: 'نطاق الـ pH' },
				value: '-2.000 to 19.999 pH',
			},
			{
				label: { en: 'Calibration', ar: 'المعايرة' },
				value: '1 to 3 points',
			},
			{
				label: { en: 'Function', ar: 'الوظيفة' },
				value: 'AutoRead for reproducible results',
			}
		],
		name: {
			en: 'WTW inoLab® pH 7110 Benchtop Meter',
			ar: 'جهاز inoLab® pH 7110 المكتبي من WTW',
		},
		description: {
			en: 'A simple, reliable, and precise routine pH/mV meter for the laboratory. Includes an AutoRead function ensuring stable, reproducible results.',
			ar: 'جهاز روتيني بسيط وموثوق ودقيق لقياس درجة الحموضة/ملي فولت في المختبر. يتضمن وظيفة قراءة تلقائية لضمان نتائج مستقرة وقابلة للتكرار.',
		},
		applications: ['Routine Lab Testing', 'Education', 'Basic QA/QC'],
	},
	{
		id: 'inst-e-008',
		code: 'ADWA-AD310',
		category: 'electrochemistry',
		image: '/Homepage Pics/Labware/Instruments/ADWA AD310 Portable pH-mV-Temp Meter.jpg',
		specs: [
			{
				label: { en: 'Parameters', ar: 'المعلمات' },
				value: 'pH / mV / Temp',
			},
			{
				label: { en: 'Accuracy', ar: 'الدقة' },
				value: '±0.01 pH',
			},
			{
				label: { en: 'Calibration', ar: 'المعايرة' },
				value: 'Up to 2 points automatic',
			}
		],
		name: {
			en: 'ADWA AD310 Portable pH/mV/Temp Meter',
			ar: 'جهاز AD310 المحمول لقياس درجة الحموضة/ملي فولت/الحرارة من أدوا',
		},
		description: {
			en: 'Professional portable microprocessor-based pH/mV/temperature meter with automatic temperature compensation and hold function.',
			ar: 'جهاز محمول احترافي يعتمد على المعالج الدقيق لقياس درجة الحموضة/ملي فولت/الحرارة مع تعويض تلقائي لدرجة الحرارة ووظيفة التثبيت.',
		},
		applications: ['Field Work', 'Agriculture', 'Water Monitoring'],
	},

	// ── Heating ──────────────────────────────────────────────────────────────────
	{
		id: 'inst-h-001',
		code: 'IKA-CMAG-HS7',
		category: 'heating',
		image: '/Homepage Pics/Labware/Instruments/IKA C-MAG HS 7 Magnetic Stirrer with Heating.jpg',
		specs: [
			{
				label: { en: 'Temp Range', ar: 'نطاق الحرارة' },
				value: '50 - 500 °C',
			},
			{
				label: { en: 'Stirring Speed', ar: 'سرعة التقليب' },
				value: '100 - 1500 rpm',
			},
			{
				label: { en: 'Plate Material', ar: 'مادة اللوح' },
				value: 'Ceramic',
			}
		],
		name: {
			en: 'IKA C-MAG HS 7 Magnetic Stirrer with Heating',
			ar: 'مقلب مغناطيسي مع تسخين IKA C-MAG HS 7',
		},
		description: {
			en: 'High-performance magnetic stirrer with heating. Features a seamless, single-piece ceramic heating plate which offers excellent chemical resistance.',
			ar: 'مقلب مغناطيسي عالي الأداء مع تسخين. يتميز بلوح تسخين سيراميك سلس من قطعة واحدة يوفر مقاومة كيميائية ممتازة.',
		},
		applications: ['Sample Heating', 'Chemical Synthesis', 'Mixing'],
	},
	{
		id: 'inst-h-002',
		code: 'MEMMERT-UN30',
		category: 'heating',
		image: '/Homepage Pics/Labware/Instruments/Memmert Universal Oven UN30.jpg',
		specs: [
			{
				label: { en: 'Volume', ar: 'السعة' },
				value: '32 L',
			},
			{
				label: { en: 'Temp Range', ar: 'نطاق الحرارة' },
				value: 'Up to +300 °C',
			},
			{
				label: { en: 'Convection', ar: 'الحمل الحراري' },
				value: 'Natural convection',
			}
		],
		name: {
			en: 'Memmert Universal Oven UN30',
			ar: 'فرن تجفيف عام ميميرت UN30',
		},
		description: {
			en: 'Highly precise universal oven for drying, heating, aging, burn-in, and hardening. Ideal for research, science, industry, and quality assurance.',
			ar: 'فرن عام عالي الدقة للتجفيف والتسخين والتعتيق والتصلب. مثالي لمجالات البحث والعلوم والصناعة وضمان الجودة.',
		},
		applications: ['Drying', 'Sterilization', 'Material Testing'],
	},
	{
		id: 'inst-h-003',
		code: 'ISOLAB-613.01',
		category: 'heating',
		image: '/Homepage Pics/Labware/Instruments/ISOLAB Magnetic Stirrer with Hotplate.jpg',
		specs: [
			{
				label: { en: 'Max Temp', ar: 'أقصى حرارة' },
				value: '380 °C',
			},
			{
				label: { en: 'Stirring Volume', ar: 'حجم التقليب' },
				value: 'Up to 3 L (H₂O)',
			},
			{
				label: { en: 'Plate Material', ar: 'مادة اللوح' },
				value: 'Ceramic-coated Aluminum',
			}
		],
		name: {
			en: 'ISOLAB Magnetic Stirrer with Hotplate',
			ar: 'مقلب مغناطيسي مع لوح تسخين أيزولاب',
		},
		description: {
			en: 'Compact and reliable hotplate stirrer designed for daily laboratory routines. Features a robust ceramic-coated heating plate for rapid heat transfer.',
			ar: 'مقلب مع لوح تسخين مدمج وموثوق مصمم لروتين المختبر اليومي. يتميز بلوح تسخين متين مطلي بالسيراميك لنقل الحرارة بسرعة.',
		},
		applications: ['Buffer Prep', 'Sample Dissolution', 'General Heating'],
	},
	{
		id: 'inst-h-004',
		code: 'ZOMAX-HPS-A',
		category: 'heating',
		image: '/Homepage Pics/Labware/Instruments/Zomax Analog Hotplate Stirrer.jpg',
		specs: [
			{
				label: { en: 'Temp Range', ar: 'نطاق الحرارة' },
				value: 'Up to 380 °C',
			},
			{
				label: { en: 'Stirring Speed', ar: 'سرعة التقليب' },
				value: '100 - 1500 rpm',
			},
			{
				label: { en: 'Stirring Volume', ar: 'حجم التقليب' },
				value: 'Up to 2 L',
			}
		],
		name: {
			en: 'Zomax Analog Hotplate Stirrer',
			ar: 'مقلب مغناطيسي تناظري مع لوح تسخين زوماكس',
		},
		description: {
			en: 'Reliable analog hotplate stirrer with a ceramic-coated plate for general laboratory heating and mixing tasks.',
			ar: 'مقلب مغناطيسي تناظري موثوق مع لوح مطلي بالسيراميك لمهام التدفئة والخلط في المختبرات العامة.',
		},
		applications: ['Routine Mixing', 'Sample Heating'],
	},
	{
		id: 'inst-h-005',
		code: 'ZOMAX-HPS-D',
		category: 'heating',
		image: '/Homepage Pics/Labware/Instruments/Zomax Digital Hotplate Stirrer.jpg',
		specs: [
			{
				label: { en: 'Temp Range', ar: 'نطاق الحرارة' },
				value: 'Up to 380 °C',
			},
			{
				label: { en: 'Stirring Speed', ar: 'سرعة التقليب' },
				value: '100 - 1500 rpm',
			},
			{
				label: { en: 'Display', ar: 'الشاشة' },
				value: 'Digital LED',
			}
		],
		name: {
			en: 'Zomax Digital Hotplate Stirrer',
			ar: 'مقلب مغناطيسي رقمي مع لوح تسخين زوماكس',
		},
		description: {
			en: 'Advanced digital hotplate stirrer providing precise LED temperature and speed control, ensuring reproducible experimental conditions.',
			ar: 'مقلب مغناطيسي رقمي متقدم يوفر تحكماً دقيقاً في درجة الحرارة والسرعة عبر شاشة LED، مما يضمن ظروفاً تجريبية قابلة للتكرار.',
		},
		applications: ['Precise Heating', 'Chemical Synthesis'],
	},
	{
		id: 'inst-h-006',
		code: 'UKAELAB-MS-H-PRO',
		category: 'heating',
		image: '/Homepage Pics/Labware/Instruments/Ukaelab LCD Digital Hotplate Stirrer.jpg',
		specs: [
			{
				label: { en: 'Max Temp', ar: 'أقصى حرارة' },
				value: '340 °C',
			},
			{
				label: { en: 'Stirring Volume', ar: 'حجم التقليب' },
				value: 'Up to 20 L (H₂O)',
			},
			{
				label: { en: 'Plate Material', ar: 'مادة اللوح' },
				value: 'Ceramic',
			}
		],
		name: {
			en: 'Ukaelab LCD Digital Hotplate Stirrer',
			ar: 'مقلب مغناطيسي رقمي LCD مع لوح تسخين أوكاعلاب',
		},
		description: {
			en: 'High-performance hotplate stirrer featuring an LCD display, precise PID temperature control, and a highly durable ceramic plate.',
			ar: 'مقلب مغناطيسي عالي الأداء يتميز بشاشة LCD، وتحكم دقيق في درجة الحرارة (PID)، ولوح سيراميك عالي المتانة.',
		},
		applications: ['High-capacity Mixing', 'Advanced Synthesis'],
	},
	{
		id: 'inst-h-007',
		code: 'UKAELAB-MS-H-MULTI',
		category: 'heating',
		image: '/Homepage Pics/Labware/Instruments/Ukaelab Multi-Position Hotplate Stirrer.jpg',
		specs: [
			{
				label: { en: 'Positions', ar: 'المواضع' },
				value: '4 or 6 positions',
			},
			{
				label: { en: 'Max Temp', ar: 'أقصى حرارة' },
				value: '120 °C',
			},
			{
				label: { en: 'Stirring Speed', ar: 'سرعة التقليب' },
				value: '0 - 1100 rpm',
			}
		],
		name: {
			en: 'Ukaelab Multi-Position Hotplate Stirrer',
			ar: 'مقلب مغناطيسي متعدد المواضع مع لوح تسخين أوكاعلاب',
		},
		description: {
			en: 'Provides synchronized multi-position heating and stirring, perfect for high-throughput sample preparation and screening.',
			ar: 'يوفر تسخيناً وتقليباً متزامناً متعدد المواضع، وهو مثالي لإعداد العينات وفحصها بإنتاجية عالية.',
		},
		applications: ['High-throughput Prep', 'Parallel Synthesis'],
	}
];

export const instrumentCategoryColors: Record<InstrumentCategory, { bg: string; text: string; border: string }> = {
	pipetting: { bg: 'bg-violet-500/10', text: 'text-violet-700', border: 'border-violet-500/30' },
	weighing: { bg: 'bg-emerald-500/10', text: 'text-emerald-700', border: 'border-emerald-500/30' },
	heating: { bg: 'bg-orange-500/10', text: 'text-orange-700', border: 'border-orange-500/30' },
	electrochemistry: { bg: 'bg-blue-500/10', text: 'text-blue-700', border: 'border-blue-500/30' },
};