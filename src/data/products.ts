export type Category =
	| 'chromatography'
	| 'inorganic'
	| 'icp'
	| 'electrochemical'
	| 'powders';

export interface Product {
	id: string;
	code: string;
	category: Category;
	cas?: string;
	concentration?: string;
	purity?: string;
	matrix?: string;
	name: { en: string; ar: string };
	description: { en: string; ar: string };
	sizes: string[];
	applications: string[];
}

export const products: Product[] = [
	// ── Chromatography ──────────────────────────────────────────────────────────
	{
		id: 'c-001',
		code: 'TM-C-001',
		category: 'chromatography',
		concentration: '100 µg/mL each',
		matrix: 'Acetonitrile',
		name: {
			en: 'Pesticide Mix Standard — 16 Component',
			ar: 'معيار خليط المبيدات — 16 مركباً',
		},
		description: {
			en: 'EPA 8081A-compliant 16-component organochlorine and pyrethroid pesticide mix for residue analysis by GC-ECD or GC-MS.',
			ar: 'خليط 16 مركباً من المبيدات العضوية الكلورية والبيريثرويدية وفق EPA 8081A، لتحليل البقايا بـ GC-ECD أو GC-MS.',
		},
		sizes: ['1 mL', '5 mL', '10 mL'],
		applications: ['GC-ECD', 'GC-MS', 'HPLC'],
	},
	{
		id: 'c-002',
		code: 'TM-C-002',
		category: 'chromatography',
		concentration: '100 µg/mL each',
		matrix: 'Acetonitrile',
		name: {
			en: 'PAH Mix Standard — 16 Component (EPA 610)',
			ar: 'معيار خليط PAH — 16 مركباً (EPA 610)',
		},
		description: {
			en: 'EPA 610 priority pollutant PAH mix containing 16 polycyclic aromatic hydrocarbons for environmental monitoring.',
			ar: 'خليط هيدروكربونات أروماتية متعددة الحلقات وفق EPA 610، يحتوي على 16 مركباً للرصد البيئي.',
		},
		sizes: ['1 mL', '5 mL'],
		applications: ['GC-FID', 'GC-MS', 'HPLC-UV'],
	},
	{
		id: 'c-003',
		code: 'TM-C-003',
		category: 'chromatography',
		concentration: '200 µg/mL each',
		matrix: 'DMSO / Water (9:1)',
		name: {
			en: 'ICH Q3C Residual Solvents Mix — Class 1',
			ar: 'خليط مذيبات متبقية ICH Q3C — الفئة 1',
		},
		description: {
			en: 'Class 1 residual solvents (benzene, CCl₄, 1,2-dichloroethane, 1,1-dichloroethylene, 1,1,1-trichloroethane) per ICH Q3C guideline.',
			ar: 'مذيبات متبقية من الفئة الأولى وفق دليل ICH Q3C تشمل البنزين ورابع كلوريد الكربون ومركبات الكلوروإيثان.',
		},
		sizes: ['1 mL', '5 mL'],
		applications: ['GC-FID', 'GC-MS'],
	},
	{
		id: 'c-004',
		code: 'TM-C-004',
		category: 'chromatography',
		concentration: '500 µg/mL each',
		matrix: 'Methanol / Water (1:1)',
		name: {
			en: 'ICH Q3C Residual Solvents Mix — Class 2',
			ar: 'خليط مذيبات متبقية ICH Q3C — الفئة 2',
		},
		description: {
			en: '24-component Class 2 residual solvents mix covering acetonitrile, methanol, toluene, and other ICH-listed solvents.',
			ar: 'خليط من 24 مذيباً من الفئة الثانية يشمل الأسيتونيتريل والميثانول والتولوين وغيرها من المذيبات المدرجة في ICH.',
		},
		sizes: ['1 mL', '5 mL', '10 mL'],
		applications: ['GC-FID'],
	},
	{
		id: 'c-005',
		code: 'TM-C-005',
		category: 'chromatography',
		concentration: '0.1% v/v each',
		matrix: 'Methanol',
		name: {
			en: 'HPLC System Suitability Standard',
			ar: 'معيار ملاءمة نظام HPLC',
		},
		description: {
			en: 'Toluene, ethylbenzene, and p-xylene mix for routine HPLC column performance verification per USP guidelines.',
			ar: 'خليط التولوين والإيثيل بنزين وp-زيلين للتحقق من أداء عمود HPLC وفق مبادئ توجيهية USP.',
		},
		sizes: ['5 mL', '25 mL'],
		applications: ['HPLC-UV', 'HPLC-DAD'],
	},
	{
		id: 'c-006',
		code: 'TM-C-006',
		category: 'chromatography',
		concentration: '0.5 mg/mL each',
		matrix: '0.1 N HCl',
		name: {
			en: 'Amino Acid Mix Standard — 18 Component',
			ar: 'معيار خليط الأحماض الأمينية — 18 مركباً',
		},
		description: {
			en: '18 proteinogenic amino acids for HPLC amino acid analysis and method development in food, pharma, and clinical matrices.',
			ar: 'ثمانية عشر حمضاً أمينياً بروتينوجينياً لتحليل الأحماض الأمينية بـ HPLC في مصفوفات الغذاء والدواء والعيادات.',
		},
		sizes: ['1 mL', '5 mL'],
		applications: ['HPLC-UV', 'HPLC-FLD'],
	},
	{
		id: 'c-007',
		code: 'TM-C-007',
		category: 'chromatography',
		concentration: '100 mg/L each',
		matrix: 'Ultrapure Water',
		name: {
			en: 'IC Anion Standard Mix — 7 Component',
			ar: 'معيار خليط الأنيونات IC — 7 مركبات',
		},
		description: {
			en: 'Fluoride, chloride, nitrite, bromide, nitrate, phosphate, and sulfate anion mix for ion chromatography calibration.',
			ar: 'خليط أنيونات الفلوريد والكلوريد والنيتريت والبروميد والنترات والفوسفات والكبريتات لمعايرة كروماتوغرافيا الأيونات.',
		},
		sizes: ['100 mL', '500 mL'],
		applications: ['IC', 'Capillary Electrophoresis'],
	},
	{
		id: 'c-008',
		code: 'TM-C-008',
		category: 'chromatography',
		concentration: '10 mg/mL each',
		matrix: 'Hexane / Heptane (1:1)',
		name: {
			en: 'FAME Mix Standard — 37 Component',
			ar: 'معيار خليط FAME — 37 مركباً',
		},
		description: {
			en: '37 fatty acid methyl esters (C8–C24) per AOCS Ce 1j-07 for complete fatty acid profiling of food and feed oils by GC.',
			ar: 'سبعة وثلاثون إسترات ميثيل للأحماض الدهنية (C8–C24) وفق AOCS Ce 1j-07 لتحديد ملف الأحماض الدهنية الكامل بـ GC.',
		},
		sizes: ['1 mL', '5 mL'],
		applications: ['GC-FID'],
	},

	// ── Inorganic Elemental ──────────────────────────────────────────────────────
	{
		id: 'ie-001',
		code: 'TM-IE-001',
		category: 'inorganic',
		cas: '7439-92-1',
		concentration: '1000 mg/L',
		matrix: '2% HNO₃',
		name: {
			en: 'Lead (Pb) Single-Element Standard',
			ar: 'محلول معياري أحادي عنصر الرصاص (Pb)',
		},
		description: {
			en: 'NIST-traceable lead standard in 2% nitric acid. ISO 17034 certified. Suitable for AAS, ICP-OES, and UV-VIS methods.',
			ar: 'معيار رصاص قابل للتتبع وفق NIST في حمض النيتريك 2%. معتمد وفق ISO 17034. مناسب لطرق AAS و ICP-OES و UV-VIS.',
		},
		sizes: ['100 mL', '250 mL', '500 mL'],
		applications: ['FAAS', 'GFAAS', 'ICP-OES', 'UV-VIS'],
	},
	{
		id: 'ie-002',
		code: 'TM-IE-002',
		category: 'inorganic',
		cas: '7440-43-9',
		concentration: '1000 mg/L',
		matrix: '2% HNO₃',
		name: {
			en: 'Cadmium (Cd) Single-Element Standard',
			ar: 'محلول معياري أحادي عنصر الكادميوم (Cd)',
		},
		description: {
			en: 'High-purity cadmium standard certified against NIST SRM 3108. Used in environmental, food safety, and industrial QC labs.',
			ar: 'معيار كادميوم عالي النقاء معتمد مقارنةً بـ NIST SRM 3108. يُستخدم في مختبرات ضبط الجودة البيئية وسلامة الغذاء.',
		},
		sizes: ['100 mL', '250 mL', '500 mL'],
		applications: ['FAAS', 'GFAAS', 'ICP-OES'],
	},
	{
		id: 'ie-003',
		code: 'TM-IE-003',
		category: 'inorganic',
		cas: '7440-38-2',
		concentration: '1000 mg/L',
		matrix: '2% HNO₃',
		name: {
			en: 'Arsenic (As) Single-Element Standard',
			ar: 'محلول معياري أحادي عنصر الزرنيخ (As)',
		},
		description: {
			en: 'NIST-traceable arsenic standard prepared from NBS/NIST reference materials. Suitable for hydride generation AAS and ICP methods.',
			ar: 'معيار زرنيخ قابل للتتبع وفق NIST محضَّر من مواد مرجعية NBS/NIST. مناسب لـ HGAAS وطرق ICP.',
		},
		sizes: ['100 mL', '250 mL', '500 mL'],
		applications: ['HGAAS', 'ICP-MS', 'ICP-OES'],
	},
	{
		id: 'ie-004',
		code: 'TM-IE-004',
		category: 'inorganic',
		cas: '7439-97-6',
		concentration: '1000 mg/L',
		matrix: '10% HNO₃',
		name: {
			en: 'Mercury (Hg) Single-Element Standard',
			ar: 'محلول معياري أحادي عنصر الزئبق (Hg)',
		},
		description: {
			en: 'Stabilized mercury standard in 10% nitric acid with trace dichromate to prevent precipitation. For CVAAS and ICP-MS analysis.',
			ar: 'معيار زئبق مستقر في حمض نيتريك 10% مع كميات ضئيلة من الديكرومات لمنع الترسب. لتحليل CVAAS و ICP-MS.',
		},
		sizes: ['100 mL', '250 mL'],
		applications: ['CVAAS', 'ICP-MS'],
	},
	{
		id: 'ie-005',
		code: 'TM-IE-005',
		category: 'inorganic',
		cas: '7439-89-6',
		concentration: '1000 mg/L',
		matrix: '2% HNO₃',
		name: {
			en: 'Iron (Fe) Single-Element Standard',
			ar: 'محلول معياري أحادي عنصر الحديد (Fe)',
		},
		description: {
			en: 'High-purity iron standard for AAS, ICP-OES, and colorimetric methods. Traceable to NIST SRM 3126a.',
			ar: 'معيار حديد عالي النقاء لطرق AAS و ICP-OES والتلوين اللوني. قابل للتتبع وفق NIST SRM 3126a.',
		},
		sizes: ['100 mL', '250 mL', '500 mL'],
		applications: ['FAAS', 'ICP-OES', 'UV-VIS'],
	},
	{
		id: 'ie-006',
		code: 'TM-IE-006',
		category: 'inorganic',
		cas: '7440-50-8',
		concentration: '1000 mg/L',
		matrix: '2% HNO₃',
		name: {
			en: 'Copper (Cu) Single-Element Standard',
			ar: 'محلول معياري أحادي عنصر النحاس (Cu)',
		},
		description: {
			en: 'NIST-traceable copper standard prepared from high-purity metal dissolved in nitric acid. For drinking water, food, and environmental analysis.',
			ar: 'معيار نحاس قابل للتتبع وفق NIST محضَّر من معدن عالي النقاء مذاب في حمض النيتريك. لتحليل مياه الشرب والغذاء والبيئة.',
		},
		sizes: ['100 mL', '250 mL', '500 mL'],
		applications: ['FAAS', 'GFAAS', 'ICP-OES'],
	},
	{
		id: 'ie-007',
		code: 'TM-IE-007',
		category: 'inorganic',
		concentration: '100 mg/L each',
		matrix: '2% HNO₃',
		name: {
			en: 'AAS Heavy Metals Mix — 8 Elements',
			ar: 'خليط معايير المعادن الثقيلة AAS — 8 عناصر',
		},
		description: {
			en: 'Multi-element standard containing As, Cd, Cr, Cu, Ni, Pb, Se, and Zn at 100 mg/L each. For routine water quality screening.',
			ar: 'معيار متعدد العناصر يحتوي على As وCd وCr وCu وNi وPb وSe وZn بتركيز 100 mg/L لكل منها. لفحص جودة المياه الروتيني.',
		},
		sizes: ['100 mL', '500 mL'],
		applications: ['FAAS', 'ICP-OES', 'ICP-MS'],
	},
	{
		id: 'ie-008',
		code: 'TM-IE-008',
		category: 'inorganic',
		cas: '7782-49-2',
		concentration: '1000 mg/L',
		matrix: '2% HNO₃',
		name: {
			en: 'Selenium (Se) Single-Element Standard',
			ar: 'محلول معياري أحادي عنصر السيلينيوم (Se)',
		},
		description: {
			en: 'NIST-traceable selenium standard. Suitable for HGAAS, GFAAS, and ICP-MS analysis in nutritional and environmental samples.',
			ar: 'معيار سيلينيوم قابل للتتبع وفق NIST. مناسب لطرق HGAAS وGFAAS وICP-MS في العينات الغذائية والبيئية.',
		},
		sizes: ['100 mL', '250 mL', '500 mL'],
		applications: ['HGAAS', 'GFAAS', 'ICP-MS'],
	},

	// ── ICP-MS & ICP-OES ─────────────────────────────────────────────────────────
	{
		id: 'icp-001',
		code: 'TM-ICP-001',
		category: 'icp',
		concentration: '10 mg/L each',
		matrix: '2% HNO₃',
		name: {
			en: 'ICP Multi-Element Standard I — 23 Elements (EPA 200.7)',
			ar: 'معيار ICP متعدد العناصر I — 23 عنصراً (EPA 200.7)',
		},
		description: {
			en: 'EPA Method 200.7 compliant 23-element solution covering Al, Ba, Be, Ca, Cd, Co, Cr, Cu, Fe, K, Mg, Mn, Mo, Na, Ni, Pb, Sb, Se, Tl, V, and Zn.',
			ar: 'محلول 23 عنصراً متوافق مع طريقة EPA 200.7 يشمل: Al وBa وBe وCa وCd وCo وCr وCu وFe وK وMg وMn وMo وNa وNi وPb وSb وSe وTl وV وZn.',
		},
		sizes: ['100 mL', '250 mL', '500 mL'],
		applications: ['ICP-OES'],
	},
	{
		id: 'icp-002',
		code: 'TM-ICP-002',
		category: 'icp',
		concentration: '10 µg/L each',
		matrix: '2% HNO₃',
		name: {
			en: 'ICP-MS Multi-Element Standard II — 22 Elements (EPA 6020A)',
			ar: 'معيار ICP-MS متعدد العناصر II — 22 عنصراً (EPA 6020A)',
		},
		description: {
			en: 'EPA 6020A ultra-trace 22-element solution for ICP-MS environmental analysis of drinking water and waste waters.',
			ar: 'محلول فائق التتبع لـ 22 عنصراً وفق EPA 6020A لتحليل ICP-MS البيئي لمياه الشرب والمياه العادمة.',
		},
		sizes: ['100 mL', '250 mL'],
		applications: ['ICP-MS'],
	},
	{
		id: 'icp-003',
		code: 'TM-ICP-003',
		category: 'icp',
		concentration: '1 mg/L each',
		matrix: '3% HNO₃ / 1% HF',
		name: {
			en: 'Rare Earth Elements Mix — 15 Lanthanides',
			ar: 'خليط عناصر الأرض النادرة — 15 لانثانيداً',
		},
		description: {
			en: 'Complete set of 15 lanthanide elements (La–Lu) for REE profiling by ICP-MS in geological, environmental, and high-tech materials.',
			ar: 'المجموعة الكاملة من 15 عنصر لانثانيد (La–Lu) لتحديد ملف عناصر الأرض النادرة بـ ICP-MS في العينات الجيولوجية والبيئية.',
		},
		sizes: ['100 mL', '250 mL'],
		applications: ['ICP-MS', 'ICP-OES'],
	},
	{
		id: 'icp-004',
		code: 'TM-ICP-004',
		category: 'icp',
		concentration: '10 mg/L each',
		matrix: '2% HNO₃',
		name: {
			en: 'ICP-MS Internal Standard Mix — Sc, Y, In, Tb, Bi',
			ar: 'خليط المعايير الداخلية ICP-MS — Sc وY وIn وTb وBi',
		},
		description: {
			en: 'Five-element internal standard mixture (Sc, Y, In, Tb, Bi) covering the full mass range of ICP-MS for drift correction and signal normalization.',
			ar: 'خليط من خمسة عناصر كمعايير داخلية (Sc وY وIn وTb وBi) يغطي النطاق الكتلي الكامل لـ ICP-MS لتصحيح الانجراف وتطبيع الإشارات.',
		},
		sizes: ['100 mL', '250 mL'],
		applications: ['ICP-MS'],
	},
	{
		id: 'icp-005',
		code: 'TM-ICP-005',
		category: 'icp',
		concentration: '10 µg/L each',
		matrix: '2% HNO₃',
		name: {
			en: 'ICP-MS Instrument Tune Solution — 6 Elements',
			ar: 'محلول ضبط ICP-MS — 6 عناصر',
		},
		description: {
			en: 'Daily instrument tuning solution containing Li, Co, In, Ce, Bi, and Ba for optimization of ICP-MS sensitivity, resolution, and oxide ratios.',
			ar: 'محلول الضبط اليومي للأجهزة يحتوي على Li وCo وIn وCe وBi وBa لتحسين حساسية ICP-MS والدقة ونسب الأكاسيد.',
		},
		sizes: ['100 mL', '500 mL'],
		applications: ['ICP-MS'],
	},
	{
		id: 'icp-006',
		code: 'TM-ICP-006',
		category: 'icp',
		concentration: '10 mg/L each',
		matrix: '5% HCl / 2% HNO₃',
		name: {
			en: 'Platinum Group Elements Mix — Pd, Pt, Rh, Ru, Ir, Os',
			ar: 'خليط عناصر مجموعة البلاتين — Pd وPt وRh وRu وIr وOs',
		},
		description: {
			en: 'Six platinum group elements (PGE) in a mixed acid matrix for autocatalyst, geological, and semiconductor ICP-MS analysis.',
			ar: 'ستة عناصر من مجموعة البلاتين في مصفوفة حمض مختلط لتحليل ICP-MS في محفزات السيارات والعينات الجيولوجية وأشباه الموصلات.',
		},
		sizes: ['100 mL', '250 mL'],
		applications: ['ICP-MS', 'ICP-OES'],
	},
	{
		id: 'icp-007',
		code: 'TM-ICP-007',
		category: 'icp',
		concentration: '1 µg/L each',
		matrix: '1% HNO₃',
		name: {
			en: 'Ultra-Trace Heavy Metals Standard — 8 Elements',
			ar: 'معيار المعادن الثقيلة فائقة التتبع — 8 عناصر',
		},
		description: {
			en: 'Sub-ppb multi-element standard (As, Cd, Cr, Hg, Ni, Pb, Se, Tl) for ultra-trace ICP-MS analysis of drinking water per EU Directive 98/83/EC.',
			ar: 'معيار متعدد العناصر دون ppb (As وCd وCr وHg وNi وPb وSe وTl) لتحليل ICP-MS فائق الحساسية لمياه الشرب وفق توجيهات الاتحاد الأوروبي.',
		},
		sizes: ['100 mL', '250 mL'],
		applications: ['ICP-MS'],
	},
	{
		id: 'icp-008',
		code: 'TM-ICP-008',
		category: 'icp',
		concentration: '100 mg/L each',
		matrix: '2% HNO₃',
		name: {
			en: 'ICP-OES Calibration Blank — 2% HNO₃',
			ar: 'فارغة معايرة ICP-OES — HNO₃ 2%',
		},
		description: {
			en: 'Sub-ppb grade ultrapure 2% nitric acid blank matrix for ICP-OES and ICP-MS calibration sequences and method blanks.',
			ar: 'مصفوفة فارغة من حمض النيتريك 2% عالي النقاء بدرجة دون ppb لتسلسلات المعايرة وفراغات الطريقة في ICP-OES وICP-MS.',
		},
		sizes: ['500 mL', '1 L'],
		applications: ['ICP-OES', 'ICP-MS'],
	},

	// ── Electrochemical ──────────────────────────────────────────────────────────
	{
		id: 'ec-001',
		code: 'TM-EC-001',
		category: 'electrochemical',
		cas: '877-24-7',
		concentration: 'pH 4.00 ± 0.02 at 25°C',
		matrix: 'Aqueous',
		name: {
			en: 'pH 4.00 Buffer Solution — Phthalate Standard',
			ar: 'محلول منظم pH 4.00 — معيار الفثالات',
		},
		description: {
			en: 'NIST-traceable potassium hydrogen phthalate (KHP) pH 4.00 buffer. Colour-coded red. ISO/IEC 17025 accredited. Suitable for pH meter calibration.',
			ar: 'محلول منظم هيدروجين فثالات البوتاسيوم (KHP) قابل للتتبع وفق NIST، pH 4.00. مُرمَّز باللون الأحمر. معتمد وفق ISO/IEC 17025.',
		},
		sizes: ['500 mL', '1 L', '5 L'],
		applications: ['pH Calibration', 'Potentiometry'],
	},
	{
		id: 'ec-002',
		code: 'TM-EC-002',
		category: 'electrochemical',
		concentration: 'pH 7.00 ± 0.02 at 25°C',
		matrix: 'Aqueous',
		name: {
			en: 'pH 7.00 Buffer Solution — Phosphate Standard',
			ar: 'محلول منظم pH 7.00 — معيار الفوسفات',
		},
		description: {
			en: 'NIST-traceable sodium-potassium phosphate pH 7.00 buffer. Colour-coded yellow. Certified to ASTM E70 and ISO 4316.',
			ar: 'محلول منظم فوسفات الصوديوم-البوتاسيوم قابل للتتبع وفق NIST، pH 7.00. مُرمَّز باللون الأصفر. معتمد وفق ASTM E70 وISO 4316.',
		},
		sizes: ['500 mL', '1 L', '5 L'],
		applications: ['pH Calibration', 'Potentiometry'],
	},
	{
		id: 'ec-003',
		code: 'TM-EC-003',
		category: 'electrochemical',
		concentration: 'pH 10.00 ± 0.02 at 25°C',
		matrix: 'Aqueous',
		name: {
			en: 'pH 10.00 Buffer Solution — Borate/Carbonate Standard',
			ar: 'محلول منظم pH 10.00 — معيار البورات/الكربونات',
		},
		description: {
			en: 'NIST-traceable borate-carbonate pH 10.00 buffer. Colour-coded blue. Supplied with certificate of analysis and uncertainty budget.',
			ar: 'محلول منظم بورات-كربونات قابل للتتبع وفق NIST، pH 10.00. مُرمَّز باللون الأزرق. يُرفق بشهادة تحليل وميزانية عدم اليقين.',
		},
		sizes: ['500 mL', '1 L', '5 L'],
		applications: ['pH Calibration', 'Potentiometry'],
	},
	{
		id: 'ec-004',
		code: 'TM-EC-004',
		cas: '7447-40-7',
		category: 'electrochemical',
		concentration: '147 µS/cm at 25°C',
		matrix: 'KCl in Ultrapure Water',
		name: {
			en: 'Conductivity Standard — 147 µS/cm (KCl)',
			ar: 'معيار الموصلية — 147 µS/cm (KCl)',
		},
		description: {
			en: 'Potassium chloride conductivity standard at 147 µS/cm (25°C) for low-range conductivity meter calibration. NIST traceable.',
			ar: 'معيار موصلية كلوريد البوتاسيوم عند 147 µS/cm (25°C) لمعايرة أجهزة قياس الموصلية في النطاق المنخفض. قابل للتتبع وفق NIST.',
		},
		sizes: ['500 mL', '1 L', '5 L'],
		applications: ['Conductivity', 'TDS Meters'],
	},
	{
		id: 'ec-005',
		code: 'TM-EC-005',
		cas: '7447-40-7',
		category: 'electrochemical',
		concentration: '1413 µS/cm at 25°C',
		matrix: 'KCl in Ultrapure Water',
		name: {
			en: 'Conductivity Standard — 1413 µS/cm (KCl)',
			ar: 'معيار الموصلية — 1413 µS/cm (KCl)',
		},
		description: {
			en: 'Mid-range KCl conductivity standard at 1413 µS/cm (25°C), matching the WHO guideline value for drinking water conductivity.',
			ar: 'معيار موصلية KCl في النطاق المتوسط عند 1413 µS/cm (25°C)، يتوافق مع قيمة إرشادات منظمة الصحة العالمية لموصلية مياه الشرب.',
		},
		sizes: ['500 mL', '1 L', '5 L'],
		applications: ['Conductivity', 'Water Quality'],
	},
	{
		id: 'ec-006',
		code: 'TM-EC-006',
		category: 'electrochemical',
		concentration: '100 mg/L F⁻',
		matrix: 'Ultrapure Water',
		name: {
			en: 'Fluoride Ion-Selective Electrode Standard — 100 mg/L',
			ar: 'معيار قطب الفلوريد الانتقائي للأيونات — 100 mg/L',
		},
		description: {
			en: 'Certified fluoride ISE standard at 100 mg/L in TISAB-free matrix. Traceable to NIST SRM 3182. For water and food fluoride analysis.',
			ar: 'معيار قطب الفلوريد الانتقائي معتمد عند 100 mg/L في مصفوفة خالية من TISAB. قابل للتتبع وفق NIST SRM 3182. لتحليل الفلوريد في الماء والغذاء.',
		},
		sizes: ['500 mL', '1 L'],
		applications: ['ISE', 'IC', 'UV-VIS'],
	},
	{
		id: 'ec-007',
		code: 'TM-EC-007',
		category: 'electrochemical',
		concentration: '1000 mg/L NO₃⁻',
		matrix: 'Ultrapure Water',
		name: {
			en: 'Nitrate Ion Standard — 1000 mg/L NO₃⁻',
			ar: 'معيار أيون النترات — 1000 mg/L NO₃⁻',
		},
		description: {
			en: 'Certified nitrate standard for ISE, IC, and UV spectrophotometry. Compliant with EN ISO 10304-1 and EPA Method 300.1.',
			ar: 'معيار نترات معتمد لتطبيقات ISE وIC والطيف الضوئي UV. متوافق مع EN ISO 10304-1 وطريقة EPA 300.1.',
		},
		sizes: ['500 mL', '1 L'],
		applications: ['ISE', 'IC', 'UV-VIS'],
	},
	{
		id: 'ec-008',
		code: 'TM-EC-008',
		category: 'electrochemical',
		concentration: 'pH 1.68 ± 0.01 at 25°C',
		matrix: 'Aqueous',
		name: {
			en: 'pH 1.68 Buffer Solution — Tetroxalate Standard',
			ar: 'محلول منظم pH 1.68 — معيار التيتراوكسالات',
		},
		description: {
			en: 'NIST primary standard reference pH 1.68 tetroxalate buffer for low-pH electrode calibration and acid measurement verification.',
			ar: 'محلول منظم التيتراوكسالات المرجعي الأولي NIST عند pH 1.68 لمعايرة الأقطاب عند pH المنخفض والتحقق من قياسات الحموضة.',
		},
		sizes: ['500 mL', '1 L'],
		applications: ['pH Calibration'],
	},

	// ── High-Purity Powders ──────────────────────────────────────────────────────
	{
		id: 'p-001',
		code: 'TM-P-001',
		category: 'powders',
		cas: '877-24-7',
		purity: '≥ 99.95%',
		name: {
			en: 'Potassium Hydrogen Phthalate (KHP) — Primary Standard',
			ar: 'هيدروجين فثالات البوتاسيوم (KHP) — معيار أولي',
		},
		description: {
			en: 'NIST SRM 84k-equivalent primary standard for acidimetry. Oven-dried and certified by coulometry. Molar mass 204.22 g/mol.',
			ar: 'معيار أولي مكافئ لـ NIST SRM 84k لقياس الحموضة. مُجفَّف بالفرن ومعتمد بقياس الكولومترية. الكتلة المولية 204.22 g/mol.',
		},
		sizes: ['10 g', '50 g', '100 g', '500 g'],
		applications: ['Acidimetry', 'pH Calibration', 'Karl Fischer'],
	},
	{
		id: 'p-002',
		code: 'TM-P-002',
		category: 'powders',
		cas: '62-76-0',
		purity: '≥ 99.9%',
		name: {
			en: 'Sodium Oxalate — Primary Standard',
			ar: 'أكسالات الصوديوم — معيار أولي',
		},
		description: {
			en: 'High-purity anhydrous sodium oxalate primary standard for permanganate titrations and redox standardization.',
			ar: 'معيار أولي من أكسالات الصوديوم اللامائي عالي النقاء لعمليات المعايرة بالبرمنغنات وتوحيد قياسات الأكسدة والاختزال.',
		},
		sizes: ['10 g', '50 g', '100 g'],
		applications: ['Redox Titration', 'Permanganometry'],
	},
	{
		id: 'p-003',
		code: 'TM-P-003',
		category: 'powders',
		cas: '497-19-8',
		purity: '≥ 99.9%',
		name: {
			en: 'Anhydrous Sodium Carbonate — Primary Standard',
			ar: 'كربونات الصوديوم اللامائية — معيار أولي',
		},
		description: {
			en: 'Primary standard grade anhydrous Na₂CO₃ for acidimetry and standardization of hydrochloric acid solutions.',
			ar: 'درجة معيار أولي من Na₂CO₃ اللامائية لقياس الحموضة وتوحيد محاليل حمض الهيدروكلوريك.',
		},
		sizes: ['10 g', '50 g', '100 g', '500 g'],
		applications: ['Acidimetry', 'Alkalimetry'],
	},
	{
		id: 'p-004',
		code: 'TM-P-004',
		category: 'powders',
		cas: '471-34-1',
		purity: '≥ 99.95%',
		name: {
			en: 'Calcium Carbonate — Primary Standard',
			ar: 'كربونات الكالسيوم — معيار أولي',
		},
		description: {
			en: 'Ultra-pure CaCO₃ primary standard for hardness calibration and preparation of calcium standard solutions for AAS and ICP.',
			ar: 'معيار أولي فائق النقاء من CaCO₃ لمعايرة الصلابة وإعداد محاليل معيارية للكالسيوم لأجهزة AAS وICP.',
		},
		sizes: ['10 g', '50 g', '100 g'],
		applications: ['Titrimetry', 'ICP Standards Prep', 'AAS'],
	},
	{
		id: 'p-005',
		code: 'TM-P-005',
		category: 'powders',
		cas: '6381-92-6',
		purity: '≥ 99.9%',
		name: {
			en: 'EDTA Disodium Salt Dihydrate — Chelometric Standard',
			ar: 'ملح ثنائي الصوديوم EDTA الثنائي الهيدرات — معيار الكيلومترية',
		},
		description: {
			en: 'Chelometric primary standard grade EDTA·2Na·2H₂O for complexometric titrations of water hardness and metal ion determination.',
			ar: 'درجة معيار أولي كيلومترية من EDTA·2Na·2H₂O لعمليات المعايرة التشابكية لصلابة المياه وتحديد الأيونات المعدنية.',
		},
		sizes: ['10 g', '50 g', '100 g', '500 g'],
		applications: ['Complexometry', 'Water Hardness'],
	},
	{
		id: 'p-006',
		code: 'TM-P-006',
		category: 'powders',
		cas: '7647-14-5',
		purity: '≥ 99.95%',
		name: {
			en: 'Sodium Chloride — Primary Standard',
			ar: 'كلوريد الصوديوم — معيار أولي',
		},
		description: {
			en: 'Oven-dried NaCl primary standard for argentometric and mercurimetric titrations and preparation of chloride calibration standards.',
			ar: 'معيار أولي من NaCl مُجفَّف بالفرن لعمليات المعايرة الأرجنتومترية والزئبقية وإعداد معايير معايرة الكلوريد.',
		},
		sizes: ['10 g', '50 g', '100 g', '500 g'],
		applications: ['Argentometry', 'IC Standards Prep'],
	},
	{
		id: 'p-007',
		code: 'TM-P-007',
		category: 'powders',
		cas: '7778-50-9',
		purity: '≥ 99.9%',
		name: {
			en: 'Potassium Dichromate — Primary Standard',
			ar: 'ثنائي كرومات البوتاسيوم — معيار أولي',
		},
		description: {
			en: 'Primary standard K₂Cr₂O₇ for iodometric, cerimetric, and COD determinations. Traceable to NIST SRM 136f.',
			ar: 'معيار أولي K₂Cr₂O₇ لتحديدات اليودومتري والسيريمتري والطلب الكيميائي للأكسجين COD. قابل للتتبع وفق NIST SRM 136f.',
		},
		sizes: ['10 g', '50 g', '100 g'],
		applications: ['Iodometry', 'COD', 'Redox'],
	},
	{
		id: 'p-008',
		code: 'TM-P-008',
		category: 'powders',
		cas: '65-85-0',
		purity: '≥ 99.97%',
		name: {
			en: 'Benzoic Acid — Calorimetric Standard',
			ar: 'حمض البنزويك — معيار القياس الحراري',
		},
		description: {
			en: 'NIST SRM 39j-equivalent benzoic acid calorimetric standard (ΔHc = 26.434 kJ/g). Used for bomb calorimeter calibration.',
			ar: 'معيار القياس الحراري من حمض البنزويك مكافئ لـ NIST SRM 39j (ΔHc = 26.434 kJ/g). يُستخدم لمعايرة قنابل القياس الحراري.',
		},
		sizes: ['5 g', '10 g', '25 g'],
		applications: ['Calorimetry', 'Bomb Calorimeter'],
	},
];

export const categoryColors: Record<Category, { bg: string; text: string; border: string }> = {
	chromatography: {
		bg: 'bg-blue-500/10',
		text: 'text-blue-700',
		border: 'border-blue-500/30',
	},
	inorganic: {
		bg: 'bg-amber-500/10',
		text: 'text-amber-700',
		border: 'border-amber-500/30',
	},
	icp: {
		bg: 'bg-purple-500/10',
		text: 'text-purple-700',
		border: 'border-purple-500/30',
	},
	electrochemical: {
		bg: 'bg-emerald-500/10',
		text: 'text-emerald-700',
		border: 'border-emerald-500/30',
	},
	powders: {
		bg: 'bg-slate-500/10',
		text: 'text-slate-600',
		border: 'border-slate-500/30',
	},
};
