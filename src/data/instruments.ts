export type InstrumentCategory =
	| 'pipetting'
	| 'weighing'
	| 'heating'
	| 'electrochemistry';

export interface Instrument {
	id: string;
	code: string;
	category: InstrumentCategory;
	image: string;
	name: { en: string; ar: string };
	description: { en: string; ar: string };
	specs: { label: { en: string; ar: string }; value: string }[];
	applications: string[];
}

export const instruments: Instrument[] = [
	{
		id: 'ins-001',
		code: 'TM-I-MP',
		category: 'pipetting',
		image: 'https://images.unsplash.com/photo-1576319155264-99536e0be1ee?w=900&q=80',
		name: {
			en: 'Micropipettes — Variable Volume',
			ar: 'ماصّات دقيقة — حجم متغيّر',
		},
		description: {
			en: 'Autoclavable single-channel variable-volume micropipettes with ergonomic grip, digital volume display, and ISO 8655 calibration certificate.',
			ar: 'ماصّات دقيقة أحادية القناة بحجم متغيّر قابلة للتعقيم، بقبضة مريحة وشاشة حجم رقمية وشهادة معايرة وفق ISO 8655.',
		},
		specs: [
			{ label: { en: 'Volume Range', ar: 'نطاق الحجم' }, value: '0.1 µL – 10 mL' },
			{ label: { en: 'Accuracy', ar: 'الدقة' }, value: '±0.6%' },
			{ label: { en: 'Standard', ar: 'المواصفة' }, value: 'ISO 8655' },
		],
		applications: ['Liquid Handling', 'Sample Prep', 'Serial Dilution'],
	},
	{
		id: 'ins-002',
		code: 'TM-I-DB',
		category: 'weighing',
		image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=900&q=80',
		name: {
			en: 'Digital Analytical Balance',
			ar: 'ميزان تحليلي رقمي',
		},
		description: {
			en: 'High-precision digital analytical balance with internal calibration, draft shield, and OIML-certified readability for laboratory weighing.',
			ar: 'ميزان تحليلي رقمي عالي الدقة مع معايرة داخلية وواقي هواء ودقة قراءة معتمدة وفق OIML للوزن المخبري.',
		},
		specs: [
			{ label: { en: 'Capacity', ar: 'السعة' }, value: '220 g' },
			{ label: { en: 'Readability', ar: 'الحساسية' }, value: '0.1 mg' },
			{ label: { en: 'Standard', ar: 'المواصفة' }, value: 'OIML Class I' },
		],
		applications: ['Gravimetric Analysis', 'Standard Prep', 'QC'],
	},
	{
		id: 'ins-003',
		code: 'TM-I-MS',
		category: 'weighing',
		image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=900&q=80',
		name: {
			en: 'Calibration Masses Set',
			ar: 'مجموعة كتل معايرة',
		},
		description: {
			en: 'Stainless steel calibration weight set, individually serialized and supplied with OIML R111 calibration certificate. Traceable to national standards.',
			ar: 'مجموعة كتل معايرة من الفولاذ المقاوم للصدأ، ذات أرقام تسلسلية فردية ومزوّدة بشهادة معايرة OIML R111. قابلة للتتبع وفق المعايير الوطنية.',
		},
		specs: [
			{ label: { en: 'Range', ar: 'النطاق' }, value: '1 mg – 1 kg' },
			{ label: { en: 'Class', ar: 'الفئة' }, value: 'E2 / F1' },
			{ label: { en: 'Standard', ar: 'المواصفة' }, value: 'OIML R111' },
		],
		applications: ['Balance Calibration', 'Metrology', 'QC'],
	},
	{
		id: 'ins-004',
		code: 'TM-I-HP',
		category: 'heating',
		image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=900&q=80',
		name: {
			en: 'Hot Plate with Magnetic Stirrer',
			ar: 'صفيحة تسخين مع محرّك مغناطيسي',
		},
		description: {
			en: 'Digital hot plate with integrated magnetic stirrer, ceramic-coated work surface, PT1000 temperature probe input, and over-temperature safety cut-off.',
			ar: 'صفيحة تسخين رقمية مع محرّك مغناطيسي مدمج، وسطح عمل مطلي بالسيراميك، ومدخل مجس حرارة PT1000، وقطع أمان لدرجات الحرارة الزائدة.',
		},
		specs: [
			{ label: { en: 'Max Temp', ar: 'أقصى حرارة' }, value: '550 °C' },
			{ label: { en: 'Stirring', ar: 'التحريك' }, value: '100 – 1500 rpm' },
			{ label: { en: 'Plate Size', ar: 'حجم الصفيحة' }, value: 'Ø 135 mm' },
		],
		applications: ['Heating', 'Mixing', 'Sample Prep'],
	},
	{
		id: 'ins-005',
		code: 'TM-I-PH',
		category: 'electrochemistry',
		image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80',
		name: {
			en: 'Benchtop pH Meter',
			ar: 'جهاز قياس pH مكتبي',
		},
		description: {
			en: 'Benchtop pH/mV/ORP meter with automatic temperature compensation, 3-point calibration, and GLP-compliant data logging. Supplied with combination electrode.',
			ar: 'جهاز قياس pH/mV/ORP مكتبي مع تعويض حراري تلقائي، ومعايرة من ثلاث نقاط، وتسجيل بيانات متوافق مع GLP. يُزوَّد بقطب مدمج.',
		},
		specs: [
			{ label: { en: 'pH Range', ar: 'نطاق pH' }, value: '-2.00 – 20.00' },
			{ label: { en: 'Resolution', ar: 'الدقة' }, value: '0.001 pH' },
			{ label: { en: 'Accuracy', ar: 'الدقة' }, value: '±0.002 pH' },
		],
		applications: ['pH Measurement', 'ORP', 'Water Quality'],
	},
	{
		id: 'ins-006',
		code: 'TM-I-EC',
		category: 'electrochemistry',
		image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=900&q=80',
		name: {
			en: 'Conductivity Meter',
			ar: 'جهاز قياس الموصلية',
		},
		description: {
			en: 'Multi-range benchtop conductivity/TDS/salinity meter with automatic cell constant recognition, temperature compensation, and USB data export.',
			ar: 'جهاز قياس موصلية/TDS/ملوحة مكتبي متعدد النطاقات مع تعرّف تلقائي على ثابت الخلية وتعويض حراري وتصدير بيانات عبر USB.',
		},
		specs: [
			{ label: { en: 'Range', ar: 'النطاق' }, value: '0.01 µS – 2000 mS/cm' },
			{ label: { en: 'Resolution', ar: 'الدقة' }, value: '0.01 µS/cm' },
			{ label: { en: 'Accuracy', ar: 'الدقة' }, value: '±0.5% FS' },
		],
		applications: ['Conductivity', 'TDS', 'Salinity', 'Water Quality'],
	},
];

export const instrumentCategoryColors: Record<InstrumentCategory, { bg: string; text: string; border: string }> = {
	pipetting: {
		bg: 'bg-violet-500/10',
		text: 'text-violet-700',
		border: 'border-violet-500/30',
	},
	weighing: {
		bg: 'bg-amber-500/10',
		text: 'text-amber-700',
		border: 'border-amber-500/30',
	},
	heating: {
		bg: 'bg-rose-500/10',
		text: 'text-rose-700',
		border: 'border-rose-500/30',
	},
	electrochemistry: {
		bg: 'bg-emerald-500/10',
		text: 'text-emerald-700',
		border: 'border-emerald-500/30',
	},
};
