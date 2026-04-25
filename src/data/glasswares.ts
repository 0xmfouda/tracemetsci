export type GlasswareCategory =
	| 'volumetric'
	| 'measuring'
	| 'beakers'
	| 'flasks'
	| 'pipettes'
	| 'storage'
	| 'cuvettes'
	| 'vials'
	| 'filtration';

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
	{
		id: 'gw-p-007',
		code: 'ISOLAB-019.01',
		category: 'pipettes',
		material: 'Borosilicate 3.3',
		tolerance: 'Class AS',
		standard: 'DIN EN ISO 385',
		name: {
			en: 'ISOLAB Burette — Straight, PTFE Stopcock, Class AS, Clear',
			ar: 'سحّاحة أيزولاب — مستقيمة، صنبور PTFE، فئة AS، شفافة',
		},
		description: {
			en: 'Manufactured from pre-vacuum calibrated borosilicate glass 3.3. Class AS conformity according to DIN EN ISO 385. Features a straight PTFE stopcock and Schellbach stripe for exact meniscus reading.',
			ar: 'مصنوعة من زجاج البوروسيليكات 3.3 المعاير مسبقًا. تتوافق مع الفئة AS وفقًا لمعيار DIN EN ISO 385. تتميز بصنبور PTFE مستقيم وشريط شيلباخ لقراءة دقيقة للسطح الهلالي.',
		},
		sizes: ['10 mL', '25 mL', '50 mL'],
		applications: ['Titration', 'Analytical Chemistry'],
	},
	{
		id: 'gw-p-008',
		code: 'ISOLAB-019.05',
		category: 'pipettes',
		material: 'Borosilicate 3.3, Amber',
		tolerance: 'Class AS',
		standard: 'DIN EN ISO 385',
		name: {
			en: 'ISOLAB Burette — Straight, PTFE Stopcock, Class AS, Amber',
			ar: 'سحّاحة أيزولاب — مستقيمة، صنبور PTFE، فئة AS، كهرمانية',
		},
		description: {
			en: 'Amber borosilicate glass 3.3 burette for light-sensitive titrants. Class AS conformity. Equipped with a straight PTFE stopcock and white enamel graduations.',
			ar: 'سحّاحة من زجاج البوروسيليكات 3.3 الكهرماني لكواشف المعايرة الحساسة للضوء. توافق مع الفئة AS. مزودة بصنبور PTFE مستقيم وتدريجات بالمينا البيضاء.',
		},
		sizes: ['10 mL', '25 mL', '50 mL'],
		applications: ['Photosensitive Titrants', 'Iodometry'],
	},
	{
		id: 'gw-p-009',
		code: 'ISOLAB-020.03',
		category: 'pipettes',
		material: 'Borosilicate 3.3 / PE Reservoir',
		tolerance: 'Class AS',
		name: {
			en: 'ISOLAB Automatic Burette — Schilling Pattern',
			ar: 'سحّاحة أوتوماتيكية أيزولاب — نمط شيلينج',
		},
		description: {
			en: 'Schilling pattern automatic burette with a polyethylene reservoir bottle and push-button dispensing. Ensures rapid filling and reliable zeroing.',
			ar: 'سحّاحة أوتوماتيكية بنمط شيلينج مع زجاجة خزان من البولي إيثيلين وتوزيع بضغطة زر. تضمن التعبئة السريعة والتصفير الموثوق.',
		},
		sizes: ['10 mL', '25 mL', '50 mL'],
		applications: ['Routine Titrations', 'Field Testing'],
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
	{
		id: 'gw-s-003',
		code: 'ISOLAB-061.01',
		category: 'storage',
		material: 'Borosilicate 3.3',
		standard: 'ISO 4796-1',
		name: {
			en: 'ISOLAB Reagent Bottle — Clear, GL45',
			ar: 'قارورة كواشف أيزولاب — شفافة، GL45',
		},
		description: {
			en: 'Manufactured from borosilicate glass 3.3. Features a GL45 screw cap and a pouring ring to prevent drops. Autoclavable at 121°C.',
			ar: 'مصنوعة من زجاج البوروسيليكات 3.3. تتميز بغطاء لولبي GL45 وحلقة صب لمنع القطرات. قابلة للتعقيم بالأوتوكليف عند 121 درجة مئوية.',
		},
		sizes: ['100 mL', '250 mL', '500 mL', '1000 mL', '2000 mL'],
		applications: ['Chemical Storage', 'Media Preparation'],
	},
	{
		id: 'gw-s-004',
		code: 'ISOLAB-061.02',
		category: 'storage',
		material: 'Borosilicate 3.3, Amber',
		standard: 'ISO 4796-1',
		name: {
			en: 'ISOLAB Reagent Bottle — Amber, GL45',
			ar: 'قارورة كواشف أيزولاب — كهرمانية، GL45',
		},
		description: {
			en: 'Amber borosilicate glass 3.3 for storing light-sensitive reagents. Supplied with a GL45 screw cap and a pouring ring. Autoclavable at 121°C.',
			ar: 'زجاج بوروسيليكات 3.3 كهرماني لتخزين الكواشف الحساسة للضوء. مزودة بغطاء لولبي GL45 وحلقة صب. قابلة للتعقيم بالأوتوكليف عند 121 درجة مئوية.',
		},
		sizes: ['100 mL', '250 mL', '500 mL', '1000 mL', '2000 mL'],
		applications: ['Light-sensitive Storage', 'Chemical Storage'],
	},
	{
		id: 'gw-s-005',
		code: 'ISOLAB-062.01',
		category: 'storage',
		material: 'Borosilicate 3.3 / Glass Dropper',
		name: {
			en: 'ISOLAB Dropping Bottle — Clear',
			ar: 'قطارة أيزولاب — شفافة',
		},
		description: {
			en: 'Clear glass dropping bottle equipped with an interchangeable glass dropper and a rubber teat. Ideal for drop-by-drop dispensing of indicator solutions.',
			ar: 'قطارة زجاجية شفافة مزودة بقطارة زجاجية قابلة للتبديل وحلمة مطاطية. مثالية لتوزيع محاليل المؤشرات قطرة بقطرة.',
		},
		sizes: ['50 mL', '100 mL'],
		applications: ['Indicator Dispensing', 'Staining'],
	},

	// ── Cuvettes ─────────────────────────────────────────────────────────────────
	{
		id: 'gw-c-001',
		code: 'ISOLAB-097.02.001',
		category: 'cuvettes',
		material: 'Optical Glass',
		name: {
			en: 'Optical Glass Cuvette — 10 mm (1 cm)',
			ar: 'كوفيت زجاجي بصري — 10 مم (1 سم)',
		},
		description: {
			en: 'Standard rectangular macro cuvette made of optical glass. Features 10 mm path length and PTFE lid. Suitable for visible light spectrum (340 nm to 2500 nm).',
			ar: 'كوفيت ماكرو مستطيل قياسي مصنوع من الزجاج البصري. يتميز بمسار ضوئي 10 مم وغطاء PTFE. مناسب لطيف الضوء المرئي (340 نانومتر إلى 2500 نانومتر).',
		},
		sizes: ['3.5 mL (10 mm path)'],
		applications: ['Spectrophotometry', 'Visible Spectrum Analysis'],
	},
	{
		id: 'gw-c-002',
		code: 'ISOLAB-097.02.005',
		category: 'cuvettes',
		material: 'Optical Glass',
		name: {
			en: 'Optical Glass Cuvette — 50 mm (5 cm)',
			ar: 'كوفيت زجاجي بصري — 50 مم (5 سم)',
		},
		description: {
			en: 'Rectangular macro cuvette made of optical glass with a 50 mm path length. Designed for precise measurements in the visible spectrum.',
			ar: 'كوفيت ماكرو مستطيل مصنوع من الزجاج البصري بمسار ضوئي 50 مم. مصمم للقياسات الدقيقة في الطيف المرئي.',
		},
		sizes: ['17.5 mL (50 mm path)'],
		applications: ['Spectrophotometry', 'Low Concentration Analysis'],
	},
	{
		id: 'gw-c-003',
		code: 'ISOLAB-098.02.001',
		category: 'cuvettes',
		material: 'Quartz Glass',
		name: {
			en: 'Quartz Glass Cuvette — 10 mm (1 cm)',
			ar: 'كوفيت زجاج كوارتز — 10 مم (1 سم)',
		},
		description: {
			en: 'High-purity quartz glass macro cuvette with 10 mm path length. Exceptional transmission for UV and visible spectrums (190 nm to 2500 nm). Includes PTFE lid.',
			ar: 'كوفيت ماكرو من زجاج الكوارتز عالي النقاء بمسار ضوئي 10 مم. نفاذية استثنائية لأطياف الأشعة فوق البنفسجية والمرئية (190 نانومتر إلى 2500 نانومتر). يشمل غطاء PTFE.',
		},
		sizes: ['3.5 mL (10 mm path)'],
		applications: ['UV-Vis Spectrophotometry', 'DNA/RNA Analysis'],
	},
	{
		id: 'gw-c-004',
		code: 'ISOLAB-098.02.005',
		category: 'cuvettes',
		material: 'Quartz Glass',
		name: {
			en: 'Quartz Glass Cuvette — 50 mm (5 cm)',
			ar: 'كوفيت زجاج كوارتز — 50 مم (5 سم)',
		},
		description: {
			en: 'Extended path length (50 mm) high-purity quartz cuvette. Ideal for ultra-trace UV-Vis analysis where a longer optical path is required.',
			ar: 'كوفيت كوارتز عالي النقاء بمسار ضوئي ممتد (50 مم). مثالي لتحليل الأشعة فوق البنفسجية والمرئية فائق التتبع حيث يُطلب مسار ضوئي أطول.',
		},
		sizes: ['17.5 mL (50 mm path)'],
		applications: ['Ultra-Trace UV-Vis Analysis', 'Water Testing'],
	},

	// ── Chromatography Vials ─────────────────────────────────────────────────────
	{
		id: 'gw-vial-001',
		code: 'TM-VIAL-001',
		category: 'vials',
		material: 'Borosilicate 3.3',
		name: {
			en: 'HPLC/GC Autosampler Vial — 2 mL, Clear',
			ar: 'فيال أخذ العينات التلقائي لـ HPLC/GC — 2 مل، شفاف',
		},
		description: {
			en: 'Standard 2 mL clear glass vial (12 x 32 mm) for HPLC and GC autosamplers. Ensures optimal sample preservation and instrument compatibility.',
			ar: 'فيال زجاجي شفاف قياسي سعة 2 مل (12 × 32 مم) لأجهزة أخذ العينات التلقائية في HPLC و GC. يضمن الحفاظ الأمثل على العينة وتوافق الجهاز.',
		},
		sizes: ['2 mL (12 x 32 mm)'],
		applications: ['HPLC', 'GC', 'Autosamplers'],
	},
	{
		id: 'gw-vial-002',
		code: 'TM-VIAL-002',
		category: 'vials',
		material: 'Borosilicate 3.3, Amber',
		name: {
			en: 'HPLC/GC Autosampler Vial — 2 mL, Amber',
			ar: 'فيال أخذ العينات التلقائي لـ HPLC/GC — 2 مل، كهرماني',
		},
		description: {
			en: 'Amber glass 2 mL vial (12 x 32 mm) for light-sensitive samples. Designed for flawless operation with HPLC and GC autosamplers.',
			ar: 'فيال زجاجي كهرماني سعة 2 مل (12 × 32 مم) للعينات الحساسة للضوء. مصمم للعمل الخالي من العيوب مع أجهزة أخذ العينات التلقائية في HPLC و GC.',
		},
		sizes: ['2 mL (12 x 32 mm)'],
		applications: ['HPLC', 'GC', 'Light-Sensitive Samples'],
	},

	// ── Filtration ───────────────────────────────────────────────────────────────
	{
		id: 'gw-fil-001',
		code: 'TM-FIL-001',
		category: 'filtration',
		material: 'PTFE (Hydrophilic)',
		name: {
			en: 'PTFE Syringe Filter — 0.22 µm, Hydrophilic',
			ar: 'فلتر محقنة PTFE — 0.22 ميكرومتر، محب للماء',
		},
		description: {
			en: 'Hydrophilic PTFE syringe filter with 0.22 µm pore size. Ideal for the clarification of aqueous and mild organic solutions prior to HPLC/GC analysis.',
			ar: 'فلتر محقنة PTFE محب للماء بحجم مسام 0.22 ميكرومتر. مثالي لتنقية المحاليل المائية والعضوية الخفيفة قبل تحليل HPLC/GC.',
		},
		sizes: ['13 mm', '25 mm'],
		applications: ['Sample Clarification', 'HPLC Prep', 'Aqueous Solutions'],
	},
	{
		id: 'gw-fil-002',
		code: 'TM-FIL-002',
		category: 'filtration',
		material: 'PTFE (Hydrophobic)',
		name: {
			en: 'PTFE Syringe Filter — 0.22 µm, Hydrophobic',
			ar: 'فلتر محقنة PTFE — 0.22 ميكرومتر، كاره للماء',
		},
		description: {
			en: 'Hydrophobic PTFE syringe filter with 0.22 µm pore size. Highly resistant to strong solvents, acids, and bases. Perfect for organic solvent filtration.',
			ar: 'فلتر محقنة PTFE كاره للماء بحجم مسام 0.22 ميكرومتر. مقاوم بشدة للمذيبات القوية والأحماض والقواعد. مثالي لترشيح المذيبات العضوية.',
		},
		sizes: ['13 mm', '25 mm'],
		applications: ['Organic Solvents', 'Aggressive Chemicals', 'GC Prep'],
	},
	{
		id: 'gw-fil-003',
		code: 'TM-FIL-003',
		category: 'filtration',
		material: 'PTFE (Hydrophilic)',
		name: {
			en: 'PTFE Syringe Filter — 0.45 µm, Hydrophilic',
			ar: 'فلتر محقنة PTFE — 0.45 ميكرومتر، محب للماء',
		},
		description: {
			en: '0.45 µm hydrophilic PTFE syringe filter for general particulate removal from aqueous and mixed organic solutions.',
			ar: 'فلتر محقنة PTFE محب للماء بمسام 0.45 ميكرومتر لإزالة الجسيمات العامة من المحاليل المائية والعضوية المختلطة.',
		},
		sizes: ['13 mm', '25 mm'],
		applications: ['Particulate Removal', 'HPLC Prep', 'Aqueous Solutions'],
	},
	{
		id: 'gw-fil-004',
		code: 'TM-FIL-004',
		category: 'filtration',
		material: 'PTFE (Hydrophobic)',
		name: {
			en: 'PTFE Syringe Filter — 0.45 µm, Hydrophobic',
			ar: 'فلتر محقنة PTFE — 0.45 ميكرومتر، كاره للماء',
		},
		description: {
			en: '0.45 µm hydrophobic PTFE syringe filter. Provides broad chemical compatibility for aggressive solvents and gas filtration.',
			ar: 'فلتر محقنة PTFE كاره للماء بمسام 0.45 ميكرومتر. يوفر توافقًا كيميائيًا واسعًا للمذيبات القوية وترشيح الغازات.',
		},
		sizes: ['13 mm', '25 mm'],
		applications: ['Organic Solvents', 'Gas Filtration', 'Sample Clarification'],
	},
	{
		id: 'gw-fil-005',
		code: 'NEWSTAR-MCE-022',
		category: 'filtration',
		material: 'MCE (Mixed Cellulose Ester)',
		name: {
			en: 'New Star MCE Membrane Filter — 0.22 µm',
			ar: 'فلتر غشائي MCE نيو ستار — 0.22 ميكرومتر',
		},
		description: {
			en: 'High-quality Mixed Cellulose Ester (MCE) membrane filter. Ideal for microbiological analysis, water monitoring, and general aqueous filtration.',
			ar: 'فلتر غشائي من إستر السليلوز المختلط (MCE) عالي الجودة. مثالي للتحليل الميكروبيولوجي، ومراقبة المياه، والترشيح المائي العام.',
		},
		sizes: ['25 mm', '47 mm'],
		applications: ['Microbiology', 'Aqueous Filtration', 'Particle Analysis'],
	},
	{
		id: 'gw-fil-006',
		code: 'NEWSTAR-NYL-045',
		category: 'filtration',
		material: 'Nylon',
		name: {
			en: 'New Star Nylon Membrane Filter — 0.45 µm',
			ar: 'فلتر غشائي نايلون نيو ستار — 0.45 ميكرومتر',
		},
		description: {
			en: 'Naturally hydrophilic Nylon membrane filter. Provides excellent chemical compatibility for aqueous and most organic solvents without the need for pre-wetting.',
			ar: 'فلتر غشائي نايلون محب للماء بطبيعته. يوفر توافقًا كيميائيًا ممتازًا للمحاليل المائية ومعظم المذيبات العضوية دون الحاجة إلى الترطيب المسبق.',
		},
		sizes: ['25 mm', '47 mm'],
		applications: ['HPLC Solvent Prep', 'Aqueous & Organic Filtration'],
	},
	{
		id: 'gw-fil-007',
		code: 'NEWSTAR-PES-022',
		category: 'filtration',
		material: 'PES (Polyethersulfone)',
		name: {
			en: 'New Star PES Membrane Filter — 0.22 µm',
			ar: 'فلتر غشائي PES نيو ستار — 0.22 ميكرومتر',
		},
		description: {
			en: 'Highly asymmetric PES membrane filter providing exceptionally high flow rates and low protein binding. Perfect for sterile filtration of biological samples.',
			ar: 'فلتر غشائي PES غير متماثل للغاية يوفر معدلات تدفق استثنائية وارتباط بروتيني منخفض. مثالي للترشيح المعقم للعينات البيولوجية.',
		},
		sizes: ['25 mm', '47 mm'],
		applications: ['Cell Culture Media', 'Protein Solutions', 'Sterile Filtration'],
	},
	{
		id: 'gw-fil-008',
		code: 'NEWSTAR-GF-C',
		category: 'filtration',
		material: 'Borosilicate Glass Fiber',
		name: {
			en: 'New Star Glass Fiber Filter — Binder Free',
			ar: 'فلتر ألياف زجاجية نيو ستار — خالي من المواد الرابطة',
		},
		description: {
			en: 'High-retention glass fiber filter with excellent flow rates. Ideal for general pre-filtration, water analysis, and suspended solids determination.',
			ar: 'فلتر ألياف زجاجية عالي الاحتفاظ بمعدلات تدفق ممتازة. مثالي للترشيح الأولي العام، وتحليل المياه، وتحديد المواد الصلبة العالقة.',
		},
		sizes: ['47 mm', '90 mm', '110 mm', '125 mm', '150 mm'],
		applications: ['Pre-filtration', 'Water Analysis', 'Gravimetric Analysis'],
	},
	{
		id: 'gw-fil-009',
		code: 'NEWSTAR-QUAL-FAST',
		category: 'filtration',
		material: 'Cellulose',
		name: {
			en: 'New Star Qualitative Filter Paper — Fast Flow',
			ar: 'ورق ترشيح نوعي نيو ستار — تدفق سريع',
		},
		description: {
			en: 'Fast flow qualitative filter paper designed for retaining coarse particles and gelatinous precipitates.',
			ar: 'ورق ترشيح نوعي سريع التدفق مصمم لاحتجاز الجسيمات الخشنة والرواسب الهلامية.',
		},
		sizes: ['70 mm', '90 mm', '110 mm', '125 mm', '150 mm'],
		applications: ['Routine Filtration', 'Coarse Particles'],
	},
	{
		id: 'gw-fil-010',
		code: 'NEWSTAR-QUAL-MED',
		category: 'filtration',
		material: 'Cellulose',
		name: {
			en: 'New Star Qualitative Filter Paper — Medium Flow',
			ar: 'ورق ترشيح نوعي نيو ستار — تدفق متوسط',
		},
		description: {
			en: 'Medium flow qualitative filter paper. The most widely used standard grade for routine laboratory applications and teaching.',
			ar: 'ورق ترشيح نوعي متوسط التدفق. الدرجة القياسية الأكثر استخدامًا للتطبيقات المخبرية الروتينية والتدريس.',
		},
		sizes: ['70 mm', '90 mm', '110 mm', '125 mm', '150 mm'],
		applications: ['General Lab Filtration', 'Education'],
	},
	{
		id: 'gw-fil-011',
		code: 'NEWSTAR-QUAL-SLOW',
		category: 'filtration',
		material: 'Cellulose',
		name: {
			en: 'New Star Qualitative Filter Paper — Slow Flow',
			ar: 'ورق ترشيح نوعي نيو ستار — تدفق بطيء',
		},
		description: {
			en: 'Slow flow qualitative filter paper designed for retaining fine particles and high-efficiency clarification.',
			ar: 'ورق ترشيح نوعي بطيء التدفق مصمم لاحتجاز الجسيمات الدقيقة والترويق عالي الكفاءة.',
		},
		sizes: ['70 mm', '90 mm', '110 mm', '125 mm', '150 mm'],
		applications: ['Fine Particulate Removal', 'Clarification'],
	},
	{
		id: 'gw-fil-012',
		code: 'NEWSTAR-QUANT-MED',
		category: 'filtration',
		material: 'Cellulose (Ashless)',
		name: {
			en: 'New Star Quantitative Filter Paper (Ashless) — Medium Flow',
			ar: 'ورق ترشيح كمي نيو ستار (بدون رماد) — تدفق متوسط',
		},
		description: {
			en: 'Ashless quantitative filter paper with medium retention and flow rate, essential for precise gravimetric analysis and environmental testing.',
			ar: 'ورق ترشيح كمي بدون رماد باحتفاظ وتدفق متوسطين، أساسي للتحليل الوزني الدقيق والاختبارات البيئية.',
		},
		sizes: ['70 mm', '90 mm', '110 mm', '125 mm', '150 mm'],
		applications: ['Gravimetric Analysis', 'Environmental Testing'],
	}
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
	cuvettes: {
		bg: 'bg-rose-500/10',
		text: 'text-rose-700',
		border: 'border-rose-500/30',
	},
	vials: {
		bg: 'bg-amber-500/10',
		text: 'text-amber-700',
		border: 'border-amber-500/30',
	},
	filtration: {
		bg: 'bg-slate-500/10',
		text: 'text-slate-700',
		border: 'border-slate-500/30',
	},
};
