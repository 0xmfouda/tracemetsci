export const languages = {
	en: 'English',
	ar: 'العربية',
} as const;

export const defaultLang = 'en' as const;
export type Lang = keyof typeof languages;

export const ui = {
	en: {
		// Site
		'site.title': 'TraceMet Science',
		// NavBar
		'nav.home': 'Home',
		'nav.products': 'Products',
		'nav.contact': 'Contact Us',
		'nav.quote': 'Request a quote',
		// Hero
		'hero.badge': 'Analytical Excellence',
		'hero.headline1': 'Metrologically',
		'hero.headline2': 'Traceable Standards',
		'hero.tagline': 'Tracemet Scientific, Your Scientific Partner in Traceability and Metrology',
		'hero.search.placeholder': 'Search by CAS number, analyte, or product code...',
		'hero.search.button': 'Search',
		// Products
		'products.title': 'Precision Product Categories',
		'products.subtitle':
			'Our metrological solutions are engineered for specific analytical environments, ensuring peak instrument performance and compliance.',
		'products.chromatography.title': 'Chromatography',
		'products.chromatography.desc':
			'Optimized standards for HPLC, GC, and IC systems including pesticide, PAH mixes, and high-purity mobile phases.',
		'products.inorganic.title': 'Inorganic Elemental',
		'products.inorganic.desc':
			'High-purity single and multi-element standards for UV-VIS and Atomic Absorption.',
		'products.icp.title': 'ICP-MS & ICP-OES Standards',
		'products.icp.desc':
			'Specialized NIST-traceable standards designed for high-sensitivity plasma spectroscopy and matrix-matched analysis.',
		'products.electrochemical.title': 'Electrochemical',
		'products.electrochemical.desc':
			'Precision pH buffers, conductivity standards, and ion-selective electrode solutions.',
		'products.powders.title': 'High-Purity Powders',
		'products.powders.desc':
			'Ultra-pure chemicals and crystalline standards for primary calibration and synthesis.',
		// CTA
		'cta.title': 'Looking for a custom solution?',
		'cta.desc':
			'Our metrologists can formulate custom multi-component standards tailored to your specific analytical methodology and matrix requirements.',
		'cta.configure': 'Configure Custom Mix',
		'cta.catalog': 'Download Catalog',
		// Footer
		'footer.desc':
			'Global leaders in metrological traceability and analytical excellence. Precision defined at every step.',
		'footer.office': 'Head Office: Maadi',
		'footer.solutions': 'Solutions',
		'footer.company': 'Company',
		'footer.legal': 'Legal',
		'footer.chromatography': 'Chromatography',
		'footer.inorganic': 'Inorganic Elemental',
		'footer.custom': 'Custom Mixtures',
		'footer.about': 'About Us',
		'footer.support': 'Technical Support',
		'footer.global': 'Global Support',
		'footer.privacy': 'Privacy Policy',
		'footer.terms': 'Terms of Service',
		'footer.accreditation': 'Accreditation',
		'footer.copyright': '© 2024 Tracemet Scientific. Precision defined.',
		'footer.secure': 'Secure Metrology Portal',
		// Contact page
		'contact.title': 'Contact Us - TraceMet Science',
		'contact.heading': 'Get in Touch',
		'contact.subheading':
			"We're here to help with your metrological needs. Reach out to us through email or WhatsApp for inquiries, support, or quotes.",
		'contact.email.title': 'Send us an Email',
		'contact.name.label': 'Full Name',
		'contact.name.placeholder': 'John Doe',
		'contact.email.label': 'Email Address',
		'contact.email.placeholder': 'you@example.com',
		'contact.message.label': 'Message',
		'contact.message.placeholder': 'How can we help you?',
		'contact.send': 'Send Email',
		'contact.sending': 'Sending...',
		'contact.whatsapp.title': 'Contact via WhatsApp',
		'contact.whatsapp.desc':
			'For quick questions or immediate assistance, message us directly on WhatsApp.',
		'contact.whatsapp.button': 'Chat on WhatsApp',
		'contact.dialog.title': 'Message Received!',
		'contact.dialog.body':
			'Thank you for reaching out. We have received your email and will get back to you as soon as possible.',
		'contact.dialog.close': 'Close',
		'contact.error': 'Something went wrong. Please try again.',
		// Products page
		'page.products.title': 'Products — TraceMet Science',
		'page.products.badge': 'Full Product Catalog',
		'page.products.heading': 'Analytical Standards & Reference Materials',
		'page.products.subtitle':
			'Browse our complete catalog of NIST-traceable reference standards, certified buffers, and primary-grade powders for every analytical technique.',
		'page.products.search.placeholder': 'Search by name, product code, or CAS number...',
		'page.products.filter.all': 'All',
		'page.products.filter.chromatography': 'Chromatography',
		'page.products.filter.inorganic': 'Inorganic Elemental',
		'page.products.filter.icp': 'ICP-MS & ICP-OES',
		'page.products.filter.electrochemical': 'Electrochemical',
		'page.products.filter.powders': 'High-Purity Powders',
		'page.products.showing': 'Showing',
		'page.products.of': 'of',
		'page.products.results': 'products',
		'page.products.cas': 'CAS',
		'page.products.concentration': 'Concentration',
		'page.products.purity': 'Purity',
		'page.products.matrix': 'Matrix',
		'page.products.applications': 'Applications',
		'page.products.sizes': 'Sizes',
		'page.products.request_quote': 'Request Quote',
		'page.products.noresults.title': 'No products found',
		'page.products.noresults.desc':
			'Try adjusting your search or selecting a different category.',
		'page.products.noresults.reset': 'Clear filters',
		'page.products.prev': 'Prev',
		'page.products.next': 'Next',
	},
	ar: {
		// Site
		'site.title': 'تريسمت العلمية',
		// NavBar
		'nav.home': 'الرئيسية',
		'nav.products': 'المنتجات',
		'nav.contact': 'تواصل معنا',
		'nav.quote': 'طلب عرض سعر',
		// Hero
		'hero.badge': 'التميّز التحليلي',
		'hero.headline1': 'معايير قياسية',
		'hero.headline2': 'قابلة للتتبع المترولوجي',
		'hero.tagline': 'تريسمت العلمية، شريكك العلمي في قابلية التتبع والمترولوجيا',
		'hero.search.placeholder': 'ابحث برقم CAS أو اسم العنصر أو رمز المنتج...',
		'hero.search.button': 'بحث',
		// Products
		'products.title': 'فئات المنتجات الدقيقة',
		'products.subtitle':
			'حلولنا المترولوجية مُهندَسة لبيئات تحليلية محددة، لضمان أعلى أداء للأجهزة والامتثال للمعايير.',
		'products.chromatography.title': 'الكروماتوغرافيا',
		'products.chromatography.desc':
			'معايير محسّنة لأنظمة HPLC وGC وIC، تشمل خلائط المبيدات وPAH والمراحل المتنقلة عالية النقاء.',
		'products.inorganic.title': 'التحليل غير العضوي',
		'products.inorganic.desc':
			'معايير أحادية ومتعددة العناصر عالية النقاء لأجهزة UV-VIS والامتصاص الذري.',
		'products.icp.title': 'معايير ICP-MS و ICP-OES',
		'products.icp.desc':
			'معايير متخصصة قابلة للتتبع وفق NIST، مصممة لطيف البلازما عالي الحساسية والتحليل المتوافق مع المصفوفة.',
		'products.electrochemical.title': 'الكيمياء الكهربائية',
		'products.electrochemical.desc':
			'محاليل pH دقيقة ومعايير الموصلية وحلول أقطاب انتقاء الأيونات.',
		'products.powders.title': 'مساحيق عالية النقاء',
		'products.powders.desc':
			'مواد كيميائية ومعايير بلورية فائقة النقاء للمعايرة الأولية والتوليف.',
		// CTA
		'cta.title': 'هل تبحث عن حل مخصص؟',
		'cta.desc':
			'يمكن لخبرائنا المتروولوجيين صياغة معايير مخصصة متعددة المكونات تتناسب مع منهجيتك التحليلية ومتطلبات المصفوفة.',
		'cta.configure': 'تكوين خليط مخصص',
		'cta.catalog': 'تحميل الكتالوج',
		// Footer
		'footer.desc': 'رواد عالميون في قابلية التتبع المترولوجي والتميز التحليلي. الدقة محددة في كل خطوة.',
		'footer.office': 'المكتب الرئيسي: المعادي',
		'footer.solutions': 'الحلول',
		'footer.company': 'الشركة',
		'footer.legal': 'القانونية',
		'footer.chromatography': 'الكروماتوغرافيا',
		'footer.inorganic': 'التحليل غير العضوي',
		'footer.custom': 'خلائط مخصصة',
		'footer.about': 'من نحن',
		'footer.support': 'الدعم الفني',
		'footer.global': 'الدعم العالمي',
		'footer.privacy': 'سياسة الخصوصية',
		'footer.terms': 'شروط الخدمة',
		'footer.accreditation': 'الاعتماد',
		'footer.copyright': '© 2024 تريسمت العلمية. الدقة محددة.',
		'footer.secure': 'بوابة المترولوجيا الآمنة',
		// Contact page
		'contact.title': 'تواصل معنا - تريسمت العلمية',
		'contact.heading': 'تواصل معنا',
		'contact.subheading':
			'نحن هنا لمساعدتك في احتياجاتك المترولوجية. تواصل معنا عبر البريد الإلكتروني أو واتساب للاستفسارات والدعم والعروض.',
		'contact.email.title': 'أرسل لنا بريداً إلكترونياً',
		'contact.name.label': 'الاسم الكامل',
		'contact.name.placeholder': 'محمد أحمد',
		'contact.email.label': 'البريد الإلكتروني',
		'contact.email.placeholder': 'example@example.com',
		'contact.message.label': 'الرسالة',
		'contact.message.placeholder': 'كيف يمكننا مساعدتك؟',
		'contact.send': 'إرسال البريد',
		'contact.sending': 'جارٍ الإرسال...',
		'contact.whatsapp.title': 'التواصل عبر واتساب',
		'contact.whatsapp.desc': 'للأسئلة السريعة أو المساعدة الفورية، راسلنا مباشرة على واتساب.',
		'contact.whatsapp.button': 'محادثة على واتساب',
		'contact.dialog.title': 'تم استلام رسالتك!',
		'contact.dialog.body':
			'شكراً لتواصلك معنا. لقد استلمنا بريدك الإلكتروني وسنتواصل معك في أقرب وقت ممكن.',
		'contact.dialog.close': 'إغلاق',
		'contact.error': 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
		// Products page
		'page.products.title': 'المنتجات — تريسمت العلمية',
		'page.products.badge': 'الكتالوج الكامل للمنتجات',
		'page.products.heading': 'المعايير التحليلية والمواد المرجعية',
		'page.products.subtitle':
			'تصفّح كتالوجنا الكامل من المعايير المرجعية القابلة للتتبع وفق NIST، والمحاليل المنظمة المعتمدة، والمساحيق من الدرجة الأولية لكل تقنية تحليلية.',
		'page.products.search.placeholder': 'ابحث بالاسم أو رمز المنتج أو رقم CAS...',
		'page.products.filter.all': 'الكل',
		'page.products.filter.chromatography': 'الكروماتوغرافيا',
		'page.products.filter.inorganic': 'التحليل غير العضوي',
		'page.products.filter.icp': 'ICP-MS و ICP-OES',
		'page.products.filter.electrochemical': 'الكيمياء الكهربائية',
		'page.products.filter.powders': 'مساحيق عالية النقاء',
		'page.products.showing': 'عرض',
		'page.products.of': 'من',
		'page.products.results': 'منتجاً',
		'page.products.cas': 'رقم CAS',
		'page.products.concentration': 'التركيز',
		'page.products.purity': 'النقاء',
		'page.products.matrix': 'المصفوفة',
		'page.products.applications': 'التطبيقات',
		'page.products.sizes': 'الأحجام المتاحة',
		'page.products.request_quote': 'طلب عرض سعر',
		'page.products.noresults.title': 'لا توجد منتجات',
		'page.products.noresults.desc': 'جرّب تعديل بحثك أو اختيار فئة مختلفة.',
		'page.products.noresults.reset': 'مسح الفلاتر',
		'page.products.prev': 'السابق',
		'page.products.next': 'التالي',
	},
} as const;
