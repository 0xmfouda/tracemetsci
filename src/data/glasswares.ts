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
	{
		id: 'gw-v-003',
		code: 'ISOLAB-013.01',
		category: 'volumetric',
		material: 'Borosilicate 3.3',
		tolerance: 'Class A',
		standard: 'DIN EN ISO 1042',
		name: {
			en: 'ISOLAB Volumetric Flask — Class A, Clear, with PE Stopper',
			ar: 'دورق حجمي أيزولاب — فئة A، شفاف، مع سدادة PE',
		},
		description: {
			en: 'Manufactured from heat resistant, durable borosilicate glass 3.3 according to DIN EN ISO 1042. Calibrated according to DIN/ISO Class A standard. Supplied with a leak-proof PE stopper.',
			ar: 'مصنوع من زجاج البوروسيليكات 3.3 المتين والمقاوم للحرارة وفقًا لمعيار DIN EN ISO 1042. تمت معايرته وفقًا لمعيار DIN/ISO الفئة A. مزود بسدادة PE مانعة للتسرب.',
		},
		sizes: ['5 mL', '10 mL', '25 mL', '50 mL', '100 mL', '250 mL', '500 mL', '1000 mL', '2000 mL'],
		applications: ['Standard Preparation', 'Quantitative Analysis'],
	},
	{
		id: 'gw-v-004',
		code: 'ISOLAB-014.01',
		category: 'volumetric',
		material: 'Borosilicate 3.3, Amber',
		tolerance: 'Class A',
		standard: 'DIN EN ISO 1042',
		name: {
			en: 'ISOLAB Volumetric Flask — Class A, Amber, with PE Stopper',
			ar: 'دورق حجمي أيزولاب — فئة A، كهرماني، مع سدادة PE',
		},
		description: {
			en: 'Manufactured from borosilicate glass 3.3. Amber color prevents UV light penetration, ideal for light-sensitive solutions. Class A conformity with batch certificate.',
			ar: 'مصنوع من زجاج البوروسيليكات 3.3. يمنع اللون الكهرماني اختراق الأشعة فوق البنفسجية، مما يجعله مثاليًا للمحاليل الحساسة للضوء. يتوافق مع الفئة A ومرفق بشهادة الدفعة.',
		},
		sizes: ['5 mL', '10 mL', '25 mL', '50 mL', '100 mL', '250 mL', '500 mL', '1000 mL', '2000 mL'],
		applications: ['Light-Sensitive Standards', 'UV Analysis'],
	},
	{
		id: 'gw-v-005',
		code: 'ISOLAB-013.11',
		category: 'volumetric',
		material: 'Borosilicate 3.3',
		tolerance: 'Class A',
		standard: 'DIN EN ISO 1042',
		name: {
			en: 'ISOLAB Volumetric Flask — Trapezoidal, Class A, Clear',
			ar: 'دورق حجمي أيزولاب شبه منحرف — فئة A، شفاف',
		},
		description: {
			en: 'Trapezoidal shape for small volumes (1 mL to 50 mL) ensures higher stability and prevents tipping. Supplied with a PE stopper. Class A accuracy.',
			ar: 'شكل شبه منحرف للأحجام الصغيرة (1 مل إلى 50 مل) يضمن ثباتًا أعلى ويمنع الانقلاب. مزود بسدادة PE. دقة الفئة A.',
		},
		sizes: ['1 mL', '2 mL', '5 mL', '10 mL', '20 mL', '25 mL', '50 mL'],
		applications: ['Micro-Volume Preparation', 'High-Stability Requirements'],
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
	{
		id: 'gw-m-003',
		code: 'ISOLAB-015.01',
		category: 'measuring',
		material: 'Borosilicate 3.3',
		tolerance: 'Class A',
		standard: 'DIN EN ISO 4788',
		name: {
			en: 'ISOLAB Measuring Cylinder — Tall Form, Class A, Glass Base',
			ar: 'مخبار مدرّج أيزولاب — شكل طويل، فئة A، قاعدة زجاجية',
		},
		description: {
			en: 'Manufactured from borosilicate glass 3.3. Class A conformity with printed batch certificate. Features a hexagonal glass base for excellent stability and blue enamel graduations.',
			ar: 'مصنوع من زجاج البوروسيليكات 3.3. يتوافق مع الفئة A ومرفق بشهادة الدفعة. يتميز بقاعدة زجاجية سداسية لثبات ممتاز وتدريجات بالمينا الزرقاء.',
		},
		sizes: ['5 mL', '10 mL', '25 mL', '50 mL', '100 mL', '250 mL', '500 mL', '1000 mL', '2000 mL'],
		applications: ['Precise Volume Measurement', 'Analytical Preparation'],
	},
	{
		id: 'gw-m-004',
		code: 'ISOLAB-016.01',
		category: 'measuring',
		material: 'Borosilicate 3.3',
		tolerance: 'Class B',
		standard: 'DIN EN ISO 4788',
		name: {
			en: 'ISOLAB Measuring Cylinder — Tall Form, Class B, Glass Base',
			ar: 'مخبار مدرّج أيزولاب — شكل طويل، فئة B، قاعدة زجاجية',
		},
		description: {
			en: 'Class B measuring cylinder manufactured from borosilicate 3.3 glass. Features a hexagonal glass base and white enamel graduations for routine laboratory measurements.',
			ar: 'مخبار مدرّج فئة B مصنوع من زجاج البوروسيليكات 3.3. يتميز بقاعدة زجاجية سداسية وتدريجات بالمينا البيضاء للقياسات المخبرية الروتينية.',
		},
		sizes: ['5 mL', '10 mL', '25 mL', '50 mL', '100 mL', '250 mL', '500 mL', '1000 mL', '2000 mL'],
		applications: ['Routine Measurement', 'General Lab Use'],
	},
	{
		id: 'gw-m-005',
		code: 'ISOLAB-017.01',
		category: 'measuring',
		material: 'Borosilicate 3.3',
		tolerance: 'Class A',
		standard: 'DIN EN ISO 4788',
		name: {
			en: 'ISOLAB Mixing Cylinder — Class A, with PE Stopper',
			ar: 'مخبار خلط أيزولاب — فئة A، مع سدادة PE',
		},
		description: {
			en: 'Class A mixing cylinder with a standard ground joint and PE stopper. Ideal for mixing liquids safely and accurately. Blue enamel graduations and batch certificate included.',
			ar: 'مخبار خلط فئة A مع وصلة قياسية وسدادة PE. مثالي لخلط السوائل بأمان ودقة. يتضمن تدريجات بالمينا الزرقاء وشهادة دفعة.',
		},
		sizes: ['10 mL', '25 mL', '50 mL', '100 mL', '250 mL', '500 mL', '1000 mL'],
		applications: ['Liquid Mixing', 'Standard Preparation'],
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
	{
		id: 'gw-p-004',
		code: 'ISOLAB-021.01',
		category: 'pipettes',
		material: 'Borosilicate 3.3',
		tolerance: 'Class AS',
		standard: 'DIN EN ISO 648',
		name: {
			en: 'ISOLAB Volumetric Pipette — Class AS, 1 Mark',
			ar: 'ماصّة حجمية أيزولاب — فئة AS، علامة واحدة',
		},
		description: {
			en: 'Manufactured from borosilicate glass 3.3. Class AS conformity according to DIN EN ISO 648. Features blue enamel graduation mark and printed batch certificate.',
			ar: 'مصنوعة من زجاج البوروسيليكات 3.3. تتوافق مع الفئة AS وفقًا لمعيار DIN EN ISO 648. تتميز بعلامة تدريج بالمينا الزرقاء وشهادة دفعة مطبوعة.',
		},
		sizes: ['1 mL', '2 mL', '5 mL', '10 mL', '20 mL', '25 mL', '50 mL', '100 mL'],
		applications: ['Precise Aliquoting', 'Standard Preparation'],
	},
	{
		id: 'gw-p-005',
		code: 'ISOLAB-022.01',
		category: 'pipettes',
		material: 'Borosilicate 3.3',
		tolerance: 'Class AS',
		standard: 'DIN EN ISO 835',
		name: {
			en: 'ISOLAB Measuring Pipette — Class AS',
			ar: 'ماصّة مدرّجة أيزولاب — فئة AS',
		},
		description: {
			en: 'Measuring pipette manufactured to DIN EN ISO 835 standards. Class AS with waiting time of 5 seconds. Blue enamel graduations for easy volume reading.',
			ar: 'ماصّة مدرّجة مُصنعة وفقًا لمعايير DIN EN ISO 835. فئة AS مع وقت انتظار 5 ثوانٍ. تدريجات بالمينا الزرقاء لسهولة قراءة الحجم.',
		},
		sizes: ['1 mL', '2 mL', '5 mL', '10 mL', '25 mL'],
		applications: ['Variable Volume Transfer', 'Routine Titration'],
	},
	{
		id: 'gw-p-006',
		code: 'ISOLAB-022.02',
		category: 'pipettes',
		material: 'Neutral Glass',
		name: {
			en: 'ISOLAB Pasteur Pipette — Glass',
			ar: 'ماصّة باستير أيزولاب — زجاج',
		},
		description: {
			en: 'Disposable glass pasteur pipettes with long drawn capillary tips. Ideal for transferring small amounts of liquids safely.',
			ar: 'ماصّات باستير زجاجية للاستخدام مرة واحدة بأطراف شعرية طويلة مسحوبة. مثالية لنقل كميات صغيرة من السوائل بأمان.',
		},
		sizes: ['150 mm', '230 mm'],
		applications: ['Sample Transfer', 'Microbiology', 'Dropwise Additions'],
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
