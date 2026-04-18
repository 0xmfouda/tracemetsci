export type GlasswareCategory =
	| 'volumetric'
	| 'measuring'
	| 'beakers'
	| 'flasks'
	| 'pipettes'
	| 'storage';

export interface Glassware {
	id: string;
	code: string;
	category: GlasswareCategory;
	material?: string;
	tolerance?: string;
	standard?: string;
	name: { en: string; ar: string };
	description: { en: string; ar: string };
	sizes: string[];
	applications: string[];
}

export const glasswares: Glassware[] = [
	// ── Volumetric ───────────────────────────────────────────────────────────────
	{
		id: 'gw-v-001',
		code: 'TM-G-V-001',
		category: 'volumetric',
		material: 'Borosilicate 3.3',
		tolerance: 'Class A, ±0.1 mL',
		standard: 'ISO 1042',
		name: {
			en: 'Volumetric Flask — Class A, Clear',
			ar: 'دورق حجمي — فئة A، شفاف',
		},
		description: {
			en: 'Class A volumetric flask with stopper. Individually calibrated and certified to ISO 1042 with a printed batch certificate.',
			ar: 'دورق حجمي فئة A مع سدادة. معاير ومعتمد فرديًا وفق ISO 1042 مع شهادة دفعة مطبوعة.',
		},
		sizes: ['10 mL', '25 mL', '50 mL', '100 mL', '250 mL', '500 mL', '1000 mL', '2000 mL'],
		applications: ['Standard Preparation', 'Quantitative Analysis'],
	},
	{
		id: 'gw-v-002',
		code: 'TM-G-V-002',
		category: 'volumetric',
		material: 'Borosilicate 3.3, Amber',
		tolerance: 'Class A, ±0.1 mL',
		standard: 'ISO 1042',
		name: {
			en: 'Volumetric Flask — Class A, Amber',
			ar: 'دورق حجمي — فئة A، كهرماني',
		},
		description: {
			en: 'Light-protective amber volumetric flask for photosensitive solutions and standards.',
			ar: 'دورق حجمي كهرماني واقٍ من الضوء للمحاليل والمعايير الحساسة للضوء.',
		},
		sizes: ['25 mL', '50 mL', '100 mL', '250 mL', '500 mL', '1000 mL'],
		applications: ['Light-Sensitive Standards', 'UV Analysis'],
	},

	// ── Measuring cylinders ──────────────────────────────────────────────────────
	{
		id: 'gw-m-001',
		code: 'TM-G-M-001',
		category: 'measuring',
		material: 'Borosilicate 3.3',
		tolerance: 'Class A',
		standard: 'ISO 4788',
		name: {
			en: 'Graduated Measuring Cylinder — Class A',
			ar: 'مخبار مدرّج — فئة A',
		},
		description: {
			en: 'Hexagonal-base graduated cylinder with spout. Printed permanent white scale, conformity certified to ISO 4788.',
			ar: 'مخبار مدرّج بقاعدة سداسية وصنبور. تدريج أبيض دائم مطبوع، معتمد المطابقة وفق ISO 4788.',
		},
		sizes: ['10 mL', '25 mL', '50 mL', '100 mL', '250 mL', '500 mL', '1000 mL'],
		applications: ['Volume Measurement', 'Sample Prep'],
	},
	{
		id: 'gw-m-002',
		code: 'TM-G-M-002',
		category: 'measuring',
		material: 'Borosilicate 3.3',
		tolerance: 'Class B',
		name: {
			en: 'Graduated Measuring Cylinder — Class B',
			ar: 'مخبار مدرّج — فئة B',
		},
		description: {
			en: 'Cost-effective Class B measuring cylinder for routine, non-critical volume measurements in teaching and prep work.',
			ar: 'مخبار مدرّج فئة B اقتصادي لقياسات الحجم الروتينية غير الحرجة في التدريس والتحضير.',
		},
		sizes: ['25 mL', '50 mL', '100 mL', '250 mL', '500 mL', '1000 mL'],
		applications: ['Teaching', 'General Lab Use'],
	},

	// ── Beakers ──────────────────────────────────────────────────────────────────
	{
		id: 'gw-b-001',
		code: 'TM-G-B-001',
		category: 'beakers',
		material: 'Borosilicate 3.3',
		standard: 'ISO 3819',
		name: {
			en: 'Low-Form Beaker (Griffin)',
			ar: 'بيكر منخفض (غريفِن)',
		},
		description: {
			en: 'Classic Griffin low-form beaker with spout and graduations. Heat-resistant borosilicate, suitable for direct flame and hotplate use.',
			ar: 'بيكر غريفِن الكلاسيكي المنخفض مع صنبور وتدريج. زجاج بوروسيليكات مقاوم للحرارة، مناسب للهب المباشر والصفائح الساخنة.',
		},
		sizes: ['25 mL', '50 mL', '100 mL', '250 mL', '500 mL', '1000 mL', '2000 mL'],
		applications: ['Mixing', 'Dissolution', 'Heating'],
	},
	{
		id: 'gw-b-002',
		code: 'TM-G-B-002',
		category: 'beakers',
		material: 'Borosilicate 3.3',
		standard: 'ISO 3819',
		name: {
			en: 'Tall-Form Beaker (Berzelius)',
			ar: 'بيكر مرتفع (بيرسيليوس)',
		},
		description: {
			en: 'Tall-form Berzelius beaker without spout — ideal for titrations, electrolysis, and reduced-evaporation reactions.',
			ar: 'بيكر بيرسيليوس مرتفع بدون صنبور — مثالي للمعايرات والتحليل الكهربائي والتفاعلات منخفضة التبخّر.',
		},
		sizes: ['50 mL', '100 mL', '250 mL', '500 mL', '1000 mL'],
		applications: ['Titration', 'Electrolysis'],
	},

	// ── Flasks ───────────────────────────────────────────────────────────────────
	{
		id: 'gw-f-001',
		code: 'TM-G-F-001',
		category: 'flasks',
		material: 'Borosilicate 3.3',
		standard: 'ISO 1773',
		name: {
			en: 'Erlenmeyer (Conical) Flask — Narrow Neck',
			ar: 'دورق إرلنماير (مخروطي) — رقبة ضيقة',
		},
		description: {
			en: 'Narrow-neck Erlenmeyer flask for titration and microbiological work. Compatible with standard rubber and silicone stoppers.',
			ar: 'دورق إرلنماير برقبة ضيقة لأعمال المعايرة والأحياء الدقيقة. متوافق مع السدادات المطاطية والسيليكونية القياسية.',
		},
		sizes: ['50 mL', '100 mL', '250 mL', '500 mL', '1000 mL', '2000 mL'],
		applications: ['Titration', 'Cell Culture', 'Mixing'],
	},
	{
		id: 'gw-f-002',
		code: 'TM-G-F-002',
		category: 'flasks',
		material: 'Borosilicate 3.3',
		standard: 'ISO 6556',
		name: {
			en: 'Round-Bottom Flask — Single Neck',
			ar: 'دورق كروي القاع — رقبة واحدة',
		},
		description: {
			en: 'Single-neck round-bottom flask with 24/29 ground joint. Engineered for distillation, reflux, and rotary evaporation.',
			ar: 'دورق كروي القاع برقبة واحدة ووصلة معشّقة 24/29. مصمم للتقطير والارتداد والتبخير الدوّار.',
		},
		sizes: ['50 mL', '100 mL', '250 mL', '500 mL', '1000 mL'],
		applications: ['Distillation', 'Reflux', 'Rotary Evaporation'],
	},

	// ── Pipettes ─────────────────────────────────────────────────────────────────
	{
		id: 'gw-p-001',
		code: 'TM-G-P-001',
		category: 'pipettes',
		material: 'Borosilicate 3.3',
		tolerance: 'Class AS',
		standard: 'ISO 648',
		name: {
			en: 'Volumetric (Bulb) Pipette — Class AS',
			ar: 'ماصّة حجمية (منتفخة) — فئة AS',
		},
		description: {
			en: 'One-mark bulb pipette, Class AS (waiting time 5 s), individually calibrated and certified to ISO 648.',
			ar: 'ماصّة منتفخة بعلامة واحدة، فئة AS (زمن انتظار 5 ث)، معايرة فرديًا ومعتمدة وفق ISO 648.',
		},
		sizes: ['1 mL', '2 mL', '5 mL', '10 mL', '20 mL', '25 mL', '50 mL', '100 mL'],
		applications: ['Standard Preparation', 'Aliquoting'],
	},
	{
		id: 'gw-p-002',
		code: 'TM-G-P-002',
		category: 'pipettes',
		material: 'Borosilicate 3.3',
		tolerance: 'Class AS',
		standard: 'ISO 835',
		name: {
			en: 'Graduated (Mohr) Pipette — Class AS',
			ar: 'ماصّة مدرّجة (موهر) — فئة AS',
		},
		description: {
			en: 'Graduated serological pipette, Class AS, type 1 (zero at top). For variable-volume aliquoting in analytical workflows.',
			ar: 'ماصّة مدرّجة سيرولوجية فئة AS، النوع 1 (الصفر في الأعلى). لسحب أحجام متغيرة في سير العمل التحليلي.',
		},
		sizes: ['1 mL', '2 mL', '5 mL', '10 mL', '25 mL'],
		applications: ['Variable Aliquoting', 'Serial Dilution'],
	},
	{
		id: 'gw-p-003',
		code: 'TM-G-P-003',
		category: 'pipettes',
		material: 'Borosilicate 3.3',
		tolerance: 'Class A',
		standard: 'ISO 385',
		name: {
			en: 'Burette with PTFE Stopcock — Class A',
			ar: 'سحّاحة بصنبور PTFE — فئة A',
		},
		description: {
			en: 'Class A burette with chemically inert PTFE key stopcock and Schellbach blue-stripe scale for precision titrations.',
			ar: 'سحّاحة فئة A بصنبور مفتاح PTFE خامل كيميائيًا وتدريج شيلباخ بشريط أزرق للمعايرات الدقيقة.',
		},
		sizes: ['10 mL', '25 mL', '50 mL', '100 mL'],
		applications: ['Titration', 'Acid-Base Analysis'],
	},

	// ── Storage ──────────────────────────────────────────────────────────────────
	{
		id: 'gw-s-001',
		code: 'TM-G-S-001',
		category: 'storage',
		material: 'Borosilicate 3.3, GL45',
		standard: 'ISO 4796',
		name: {
			en: 'Reagent Bottle with GL45 Cap — Clear',
			ar: 'قارورة كواشف بغطاء GL45 — شفاف',
		},
		description: {
			en: 'Wide-mouth GL45 reagent bottle with autoclavable PP screw cap and pour ring. Graduations and labelling field included.',
			ar: 'قارورة كواشف بفم واسع GL45 مع غطاء PP لولبي قابل للأوتوكليف وحلقة صب. تشمل تدريجاً ومنطقة وسم.',
		},
		sizes: ['100 mL', '250 mL', '500 mL', '1000 mL', '2000 mL', '5000 mL'],
		applications: ['Reagent Storage', 'Media Preparation'],
	},
	{
		id: 'gw-s-002',
		code: 'TM-G-S-002',
		category: 'storage',
		material: 'Borosilicate 3.3, Amber',
		standard: 'ISO 4796',
		name: {
			en: 'Reagent Bottle with GL45 Cap — Amber',
			ar: 'قارورة كواشف بغطاء GL45 — كهرماني',
		},
		description: {
			en: 'Amber GL45 reagent bottle providing >99% UV protection (300–500 nm) for photosensitive standards and reagents.',
			ar: 'قارورة كواشف كهرمانية GL45 توفر حماية UV بأكثر من 99% (300–500 نانومتر) للمعايير والكواشف الحساسة للضوء.',
		},
		sizes: ['100 mL', '250 mL', '500 mL', '1000 mL'],
		applications: ['Light-Sensitive Storage', 'HPLC Mobile Phases'],
	},
];

export const glasswareCategoryColors: Record<GlasswareCategory, { bg: string; text: string; border: string }> = {
	volumetric: {
		bg: 'bg-cyan-500/10',
		text: 'text-cyan-700',
		border: 'border-cyan-500/30',
	},
	measuring: {
		bg: 'bg-teal-500/10',
		text: 'text-teal-700',
		border: 'border-teal-500/30',
	},
	beakers: {
		bg: 'bg-sky-500/10',
		text: 'text-sky-700',
		border: 'border-sky-500/30',
	},
	flasks: {
		bg: 'bg-indigo-500/10',
		text: 'text-indigo-700',
		border: 'border-indigo-500/30',
	},
	pipettes: {
		bg: 'bg-violet-500/10',
		text: 'text-violet-700',
		border: 'border-violet-500/30',
	},
	storage: {
		bg: 'bg-fuchsia-500/10',
		text: 'text-fuchsia-700',
		border: 'border-fuchsia-500/30',
	},
};
