// Cosmic IQ Test - Game Engine & Database

// ================= QUESTION DATABASE =================
const QUESTIONS = [
    {
        category: "数理逻辑 Math & Logic",
        title: "第一题：观察以下递增数列，求问号 [ ? ] 处的数字应是多少？<br><br><strong style='font-size: 1.6rem; color: var(--primary);'>3, 5, 9, 17, 33, ?</strong>",
        type: "text",
        dimension: "math",
        weight: 1,
        options: ["49", "64", "65", "67"],
        correctIndex: 2
    },
    {
        category: "空间想象 Spatial",
        title: "第二题：根据前两行的图形演变规律，选择最适合填入第三行问号处的图形：",
        type: "graphic",
        dimension: "spatial",
        weight: 2,
        // Elegant 3x3 matrix showing shapes with increasing vertices by row and column
        visualSVG: `
            <svg viewBox="0 0 300 180" width="100%" height="100%">
                <!-- Grid Lines -->
                <line x1="100" y1="10" x2="100" y2="170" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" stroke-dasharray="4"/>
                <line x1="200" y1="10" x2="200" y2="170" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" stroke-dasharray="4"/>
                <line x1="10" y1="60" x2="290" y2="60" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" stroke-dasharray="4"/>
                <line x1="10" y1="120" x2="290" y2="120" stroke="rgba(255,255,255,0.1)" stroke-width="1.5" stroke-dasharray="4"/>
                
                <!-- Row 1: Triangle (3), Square (4), Pentagon (5) -->
                <polygon points="50,15 35,45 65,45" fill="none" stroke="#00f2fe" stroke-width="2.5"/>
                <rect x="135" y="20" width="30" height="30" fill="none" stroke="#00f2fe" stroke-width="2.5"/>
                <polygon points="250,15 264,26 259,44 241,44 236,26" fill="none" stroke="#00f2fe" stroke-width="2.5"/>
                
                <!-- Row 2: Square (4), Pentagon (5), Hexagon (6) -->
                <rect x="35" y="75" width="30" height="30" fill="none" stroke="#b16cff" stroke-width="2.5"/>
                <polygon points="150,70 164,81 159,99 141,99 136,81" fill="none" stroke="#b16cff" stroke-width="2.5"/>
                <polygon points="250,70 263,78 263,92 250,100 237,92 237,78" fill="none" stroke="#b16cff" stroke-width="2.5"/>
                
                <!-- Row 3: Pentagon (5), Hexagon (6), ? (Heptagon 7) -->
                <polygon points="50,130 64,141 59,159 41,159 36,141" fill="none" stroke="#43e97b" stroke-width="2.5"/>
                <polygon points="150,130 163,138 163,152 150,160 137,152 137,138" fill="none" stroke="#43e97b" stroke-width="2.5"/>
                <!-- Question Mark in grid -->
                <text x="250" y="153" fill="var(--text-muted)" font-size="28" font-weight="800" text-anchor="middle">?</text>
            </svg>
        `,
        options: [
            // Option 0: Hexagon (6)
            `<svg viewBox="0 0 50 50"><polygon points="25,10 38,18 38,32 25,40 12,32 12,18" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
            // Option 1: Heptagon (7 - Correct)
            `<svg viewBox="0 0 50 50"><polygon points="25,9 36,14 40,25 33,36 17,36 10,25 14,14" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
            // Option 2: Octagon (8)
            `<svg viewBox="0 0 50 50"><polygon points="25,8 37,13 42,25 37,37 25,42 13,37 8,25 13,13" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
            // Option 3: Star (5 points)
            `<svg viewBox="0 0 50 50"><polygon points="25,8 29,19 40,19 31,26 35,37 25,30 15,37 19,26 10,19 21,19" fill="none" stroke="currentColor" stroke-width="2"/></svg>`
        ],
        isGraphicOptions: true,
        gridOptions: true,
        correctIndex: 1
    },
    {
        category: "分析推理 Analytical",
        title: "第三题：请找出下列逻辑类比中的对应关系：<br><br><strong style='font-size: 1.4rem; color: var(--primary);'>医生 : 医院 = 教师 : ?</strong>",
        type: "text",
        dimension: "anal",
        weight: 1,
        options: ["学生 (Student)", "学校 (School)", "教室 (Classroom)", "书本 (Book)"],
        correctIndex: 1
    },
    {
        category: "空间想象 Spatial",
        title: "第四题：观察图形的旋转规律，推测下一个箭头 [ ? ] 指向哪个方向？",
        type: "graphic",
        dimension: "spatial",
        weight: 1,
        // Arrows rotating 90 degrees clockwise (Up-Right, Down-Right, Down-Left, Up-Left)
        visualSVG: `
            <svg viewBox="0 0 300 100" width="100%" height="100%">
                <!-- Arrow 1 (Up-Right 45deg) -->
                <g transform="translate(45, 50)">
                    <circle cx="0" cy="0" r="30" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>
                    <line x1="-15" y1="15" x2="15" y2="-15" stroke="#00f2fe" stroke-width="3" stroke-linecap="round"/>
                    <polygon points="15,-15 3,-13 13,-3" fill="#00f2fe"/>
                </g>
                
                <!-- Arrow 2 (Down-Right 135deg) -->
                <g transform="translate(115, 50)">
                    <circle cx="0" cy="0" r="30" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>
                    <line x1="-15" y1="-15" x2="15" y2="15" stroke="#00f2fe" stroke-width="3" stroke-linecap="round"/>
                    <polygon points="15,15 13,3 3,13" fill="#00f2fe"/>
                </g>

                <!-- Arrow 3 (Down-Left 225deg) -->
                <g transform="translate(185, 50)">
                    <circle cx="0" cy="0" r="30" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>
                    <line x1="15" y1="-15" x2="-15" y2="15" stroke="#00f2fe" stroke-width="3" stroke-linecap="round"/>
                    <polygon points="-15,15 -3,13 -13,3" fill="#00f2fe"/>
                </g>

                <!-- Arrow 4 (Question Mark) -->
                <g transform="translate(255, 50)">
                    <circle cx="0" cy="0" r="30" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1.5" stroke-dasharray="3"/>
                    <text x="0" y="8" fill="var(--text-muted)" font-size="24" font-weight="800" text-anchor="middle">?</text>
                </g>
            </svg>
        `,
        options: [
            // Option 0: Up-Left (Correct)
            `<svg viewBox="0 0 50 50"><line x1="35" y1="35" x2="15" y2="15" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><polygon points="15,15 27,17 17,27" fill="currentColor"/></svg>`,
            // Option 1: Up-Right
            `<svg viewBox="0 0 50 50"><line x1="15" y1="35" x2="35" y2="15" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><polygon points="35,15 23,17 33,27" fill="currentColor"/></svg>`,
            // Option 2: Down-Left
            `<svg viewBox="0 0 50 50"><line x1="35" y1="15" x2="15" y2="35" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><polygon points="15,35 27,33 17,23" fill="currentColor"/></svg>`,
            // Option 3: Up
            `<svg viewBox="0 0 50 50"><line x1="25" y1="35" x2="25" y2="15" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><polygon points="25,15 20,25 30,25" fill="currentColor"/></svg>`
        ],
        isGraphicOptions: true,
        gridOptions: true,
        correctIndex: 0
    },
    {
        category: "数理逻辑 Math & Logic",
        title: "第五题：这是一个经典的幻方数阵（每行、每列及对角线上的数字之和均相等），请问问号 [ ? ] 处应填入什么数字？",
        type: "graphic",
        dimension: "math",
        weight: 2,
        // 3x3 Magic Square (Sum = 15)
        // Row 1: 4, 9, 2
        // Row 2: 3, 5, 7
        // Row 3: 8, 1, ? (should be 6)
        visualSVG: `
            <svg viewBox="0 0 200 200" width="100%" height="100%">
                <!-- Grid border -->
                <rect x="20" y="20" width="160" height="160" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="2" rx="10"/>
                
                <!-- Internal Grid lines -->
                <line x1="73.3" y1="20" x2="73.3" y2="180" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
                <line x1="126.6" y1="20" x2="126.6" y2="180" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
                <line x1="20" y1="73.3" x2="180" y2="73.3" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
                <line x1="20" y1="126.6" x2="180" y2="126.6" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
                
                <!-- Numbers (Outfit Font Style) -->
                <text x="46.6" y="55" fill="#f8fafc" font-size="20" font-weight="700" text-anchor="middle">4</text>
                <text x="100" y="55" fill="#f8fafc" font-size="20" font-weight="700" text-anchor="middle">9</text>
                <text x="153.3" y="55" fill="#f8fafc" font-size="20" font-weight="700" text-anchor="middle">2</text>
                
                <text x="46.6" y="108.3" fill="#f8fafc" font-size="20" font-weight="700" text-anchor="middle">3</text>
                <text x="100" y="108.3" fill="#b16cff" font-size="22" font-weight="800" text-anchor="middle">5</text>
                <text x="153.3" y="108.3" fill="#f8fafc" font-size="20" font-weight="700" text-anchor="middle">7</text>
                
                <text x="46.6" y="161.6" fill="#f8fafc" font-size="20" font-weight="700" text-anchor="middle">8</text>
                <text x="100" y="161.6" fill="#f8fafc" font-size="20" font-weight="700" text-anchor="middle">1</text>
                <text x="153.3" y="163.6" fill="var(--primary)" font-size="24" font-weight="850" text-anchor="middle">?</text>
            </svg>
        `,
        options: ["5", "6", "7", "9"],
        correctIndex: 1
    },
    {
        category: "分析推理 Analytical",
        title: "第六题：在一场智力竞赛中，小明、小华、小红三人中只有一个人获得了冠军。<br>小明说：“我没有得冠军”；<br>小华说：“小红得了冠军”；<br>小红说：“我没有得冠军”。<br>如果已知这三个人中<strong>只有一个人说了真话</strong>，请问谁是冠军？",
        type: "text",
        dimension: "anal",
        weight: 2,
        options: ["小明 (Ming)", "小华 (Hua)", "小红 (Hong)", "无法确定 (Undetermined)"],
        correctIndex: 0
    },
    {
        category: "空间想象 Spatial",
        title: "第七题：观察这堆由 3D 积木堆叠而成的模型，假设底面完全铺满，没有悬空的积木，请问总共有多少个立方体积木？",
        type: "graphic",
        dimension: "spatial",
        weight: 3,
        // Gorgeous isometric projection stack of 3D cubes: 2x2 base (4 cubes) + 2 back-row cubes on 2nd floor = total 6 cubes.
        // Single cube coordinate function sketched into crisp SVG polygons.
        visualSVG: `
            <svg viewBox="0 0 200 200" width="100%" height="100%">
                <!-- Draw order: Back-Left, Back-Right, Front-Left, Front-Right, then Upper levels -->
                
                <!-- Helper: Cube at x=0, y=0, z=0 (Back Corner, Bottom) - Hidden/Obscured so we omit or draw simple parts -->
                
                <!-- Cube at x=0, y=1, z=0 (Back-Left, Bottom) -->
                <!-- cx = 100 - 30 = 70, cy = 100 + 15 = 115 -->
                <g transform="translate(60, 110)">
                    <polygon points="0,0 20,-10 40,0 20,10" fill="#2d3748" stroke="rgba(255,255,255,0.1)"/>
                    <polygon points="0,0 20,10 20,30 0,20" fill="#1a202c" stroke="rgba(255,255,255,0.1)"/>
                </g>

                <!-- Cube at x=1, y=0, z=0 (Back-Right, Bottom) -->
                <g transform="translate(100, 110)">
                    <polygon points="0,0 20,-10 40,0 20,10" fill="#2d3748" stroke="rgba(255,255,255,0.1)"/>
                    <polygon points="20,10 40,0 40,20 20,30" fill="#4a5568" stroke="rgba(255,255,255,0.1)"/>
                </g>

                <!-- Cube at x=1, y=1, z=0 (Front, Bottom) -->
                <g transform="translate(80, 130)">
                    <polygon points="0,0 20,-10 40,0 20,10" fill="#4a5568" stroke="rgba(255,255,255,0.15)"/>
                    <polygon points="0,0 20,10 20,30 0,20" fill="#2d3748" stroke="rgba(255,255,255,0.15)"/>
                    <polygon points="20,10 40,0 40,20 20,30" fill="#718096" stroke="rgba(255,255,255,0.15)"/>
                </g>
                
                <!-- Cube at x=0, y=0, z=1 (Back-Center, 2nd Level) -->
                <g transform="translate(80, 86)">
                    <polygon points="0,0 20,-10 40,0 20,10" fill="url(#cubeTopGrad1)" stroke="rgba(0, 242, 254, 0.4)"/>
                    <polygon points="0,0 20,10 20,30 0,20" fill="#1d4ed8" stroke="rgba(0, 242, 254, 0.4)"/>
                    <polygon points="20,10 40,0 40,20 20,30" fill="#1e40af" stroke="rgba(0, 242, 254, 0.4)"/>
                </g>

                <!-- Cube at x=0, y=1, z=1 (Back-Left, 2nd Level) -->
                <g transform="translate(60, 86)">
                    <polygon points="0,0 20,-10 40,0 20,10" fill="url(#cubeTopGrad1)" stroke="rgba(0, 242, 254, 0.4)"/>
                    <polygon points="0,0 20,10 20,30 0,20" fill="#1d4ed8" stroke="rgba(0, 242, 254, 0.4)"/>
                    <polygon points="20,10 40,0 40,20 20,30" fill="#1e40af" stroke="rgba(0, 242, 254, 0.4)"/>
                </g>

                <!-- Cube at x=1, y=0, z=1 (Back-Right, 2nd Level) -->
                <g transform="translate(100, 86)">
                    <polygon points="0,0 20,-10 40,0 20,10" fill="url(#cubeTopGrad1)" stroke="rgba(0, 242, 254, 0.4)"/>
                    <polygon points="0,0 20,10 20,30 0,20" fill="#1d4ed8" stroke="rgba(0, 242, 254, 0.4)"/>
                    <polygon points="20,10 40,0 40,20 20,30" fill="#1e40af" stroke="rgba(0, 242, 254, 0.4)"/>
                </g>

                <!-- Gradients inside SVG -->
                <defs>
                    <linearGradient id="cubeTopGrad1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#00f2fe"/>
                        <stop offset="100%" stop-color="#4facfe"/>
                    </linearGradient>
                </defs>
            </svg>
        `,
        options: ["5个", "6个", "7个", "8个"],
        correctIndex: 1
    },
    {
        category: "数理逻辑 Math & Logic",
        title: "第八题：分析乘积的递增级数，计算问号 [ ? ] 处的正确数值应是多少？<br><br><strong style='font-size: 1.6rem; color: var(--primary);'>1, 2, 6, 24, 120, ?</strong>",
        type: "text",
        dimension: "math",
        weight: 1,
        options: ["360", "540", "600", "720"],
        correctIndex: 3
    },
    {
        category: "模式识别 Pattern",
        title: "第九题：观察图形的几何边数规律，请挑选出与其他三个图形特征不符的“异类”：",
        type: "graphic",
        dimension: "pattern",
        weight: 2,
        // Geometric vertices: Square(4), Hexagon(6), Octagon(8) vs Triangle(3 - odd vertices)
        visualSVG: `
            <svg viewBox="0 0 320 100" width="100%" height="100%">
                <!-- Shape A: Square (Even 4) -->
                <g transform="translate(45, 50)">
                    <rect x="-20" y="-20" width="40" height="40" rx="3" fill="none" stroke="#b16cff" stroke-width="2.5"/>
                    <text x="0" y="42" fill="var(--text-muted)" font-size="10" font-weight="700" text-anchor="middle">图形 A</text>
                </g>
                
                <!-- Shape B: Hexagon (Even 6) -->
                <g transform="translate(125, 50)">
                    <polygon points="0,-22 19,-11 19,11 0,22 -19,11 -19,-11" fill="none" stroke="#b16cff" stroke-width="2.5"/>
                    <text x="0" y="42" fill="var(--text-muted)" font-size="10" font-weight="700" text-anchor="middle">图形 B</text>
                </g>

                <!-- Shape C: Triangle (Odd 3 - Odd vertex count!) -->
                <g transform="translate(205, 50)">
                    <polygon points="0,-22 21,15 -21,15" fill="none" stroke="var(--primary)" stroke-width="2.5"/>
                    <text x="0" y="42" fill="var(--text-muted)" font-size="10" font-weight="700" text-anchor="middle">图形 C</text>
                </g>

                <!-- Shape D: Octagon (Even 8) -->
                <g transform="translate(285, 50)">
                    <polygon points="8,-20 20,-8 20,8 8,20 -8,20 -20,8 -20,-8 -8,-20" fill="none" stroke="#b16cff" stroke-width="2.5"/>
                    <text x="0" y="42" fill="var(--text-muted)" font-size="10" font-weight="700" text-anchor="middle">图形 D</text>
                </g>
            </svg>
        `,
        options: ["图形 A (正方形)", "图形 B (正六边形)", "图形 C (正三角形)", "图形 D (正八边形)"],
        correctIndex: 2
    },
    {
        category: "模式识别 Pattern",
        title: "第十题：观察上方左右两组图形的嵌套及反转演变规律，求问号 [ ? ] 处的对应图形应是什么？",
        type: "graphic",
        dimension: "pattern",
        weight: 2,
        // Relation: [Circle outer, Square inner] -> [Square outer, Circle inner]
        //           [Triangle outer, Square inner] -> ? [Square outer, Triangle inner]
        visualSVG: `
            <svg viewBox="0 0 320 120" width="100%" height="100%">
                <!-- Left Analogy Pair -->
                <g transform="translate(50, 50)">
                    <circle cx="0" cy="0" r="24" fill="none" stroke="#00f2fe" stroke-width="2"/>
                    <rect x="-12" y="-12" width="24" height="24" fill="none" stroke="#b16cff" stroke-width="2"/>
                </g>
                <text x="100" y="55" fill="#f8fafc" font-size="20" font-weight="700" text-anchor="middle">➜</text>
                <g transform="translate(150, 50)">
                    <rect x="-24" y="-24" width="48" height="48" rx="2" fill="none" stroke="#b16cff" stroke-width="2"/>
                    <circle cx="0" cy="0" r="12" fill="none" stroke="#00f2fe" stroke-width="2"/>
                </g>

                <!-- Divider -->
                <line x1="200" y1="10" x2="200" y2="110" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>

                <!-- Right Analogy Pair -->
                <g transform="translate(240, 50)">
                    <polygon points="0,-25 22,15 -22,15" fill="none" stroke="#00f2fe" stroke-width="2"/>
                    <rect x="-10" y="-4" width="20" height="20" fill="none" stroke="#b16cff" stroke-width="2"/>
                </g>
                <text x="280" y="55" fill="#f8fafc" font-size="20" font-weight="700" text-anchor="middle">➜</text>
                <text x="310" y="58" fill="var(--primary)" font-size="22" font-weight="800" text-anchor="middle">?</text>
            </svg>
        `,
        options: [
            // Option 0: Square enclosing Triangle (Correct)
            `<svg viewBox="0 0 50 50"><rect x="10" y="10" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="25,18 33,32 17,32" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
            // Option 1: Triangle enclosing Circle
            `<svg viewBox="0 0 50 50"><polygon points="25,10 38,36 12,36" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="25" cy="27" r="8" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
            // Option 2: Circle enclosing Triangle
            `<svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="16" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="25,16 33,30 17,30" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
            // Option 3: Square enclosing Circle
            `<svg viewBox="0 0 50 50"><rect x="10" y="10" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="25" cy="25" r="8" fill="none" stroke="currentColor" stroke-width="2"/></svg>`
        ],
        isGraphicOptions: true,
        gridOptions: true,
        correctIndex: 0
    },
    {
        category: "分析推理 Analytical",
        title: "第十一题：设想有一个标准时钟，当时间指向 3:15 时，时钟的分针恰好指向地理位置的<strong>东方</strong>。<br>请问在 6:00 整时，时钟的<strong>时针</strong>将指向什么方向？",
        type: "text",
        dimension: "anal",
        weight: 2,
        options: ["南方 (South)", "北方 (North)", "东方 (East)", "西方 (West)"],
        correctIndex: 0
    },
    {
        category: "模式识别 Pattern",
        title: "第十二题：图形 A 和图形 B 进行逻辑“异或”叠加运算（即：重叠区域的图形抵消消失，不重叠的独特部分则保留）。请选择最适合的合并结果：",
        type: "graphic",
        dimension: "pattern",
        weight: 3,
        // XOR Operation: Circle+Horizontal Line XOR Circle+Vertical Line = Horizontal+Vertical Cross (Circle vanishes since it exists in both)
        visualSVG: `
            <svg viewBox="0 0 320 120" width="100%" height="100%">
                <!-- Graphic A: Circle + Horizontal Line -->
                <g transform="translate(60, 55)">
                    <circle cx="0" cy="0" r="22" fill="none" stroke="#00f2fe" stroke-width="2"/>
                    <line x1="-30" y1="0" x2="30" y2="0" stroke="#00f2fe" stroke-width="2"/>
                    <text x="0" y="44" fill="var(--text-muted)" font-size="10" font-weight="700" text-anchor="middle">图形 A</text>
                </g>
                
                <text x="125" y="58" fill="#f8fafc" font-size="18" font-weight="700" text-anchor="middle">⊕</text>
                
                <!-- Graphic B: Circle + Vertical Line -->
                <g transform="translate(190, 55)">
                    <circle cx="0" cy="0" r="22" fill="none" stroke="#00f2fe" stroke-width="2"/>
                    <line x1="0" y1="-30" x2="0" y2="30" stroke="#00f2fe" stroke-width="2"/>
                    <text x="0" y="44" fill="var(--text-muted)" font-size="10" font-weight="700" text-anchor="middle">图形 B</text>
                </g>
                
                <text x="250" y="58" fill="#f8fafc" font-size="18" font-weight="700" text-anchor="middle">=</text>
                <text x="285" y="62" fill="var(--primary)" font-size="24" font-weight="850" text-anchor="middle">?</text>
            </svg>
        `,
        options: [
            // Option 0: Big cross (+) without a circle (Correct)
            `<svg viewBox="0 0 50 50"><line x1="10" y1="25" x2="40" y2="25" stroke="currentColor" stroke-width="2"/><line x1="25" y1="10" x2="25" y2="40" stroke="currentColor" stroke-width="2"/></svg>`,
            // Option 1: Cross (+) inside Circle
            `<svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="16" fill="none" stroke="currentColor" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="currentColor" stroke-width="2"/><line x1="25" y1="10" x2="25" y2="40" stroke="currentColor" stroke-width="2"/></svg>`,
            // Option 2: Just a circle
            `<svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="16" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
            // Option 3: Diagonal cross (X) inside Circle
            `<svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="16" fill="none" stroke="currentColor" stroke-width="2"/><line x1="14" y1="14" x2="36" y2="36" stroke="currentColor" stroke-width="2"/><line x1="36" y1="14" x2="14" y2="36" stroke="currentColor" stroke-width="2"/></svg>`
        ],
        isGraphicOptions: true,
        gridOptions: true,
        correctIndex: 0
    },
    {
        category: "数理逻辑 Math & Logic",
        title: "第十三题：一家商店以每件 100 元的价格进货了某商品。首先提价 20% 出售，由于销量不佳，又在现价基础上降价 20%。请问最终的售价是多少？",
        type: "text",
        dimension: "math",
        weight: 2,
        options: ["100 元", "96 元", "104 元", "90 元"],
        correctIndex: 1
    },
    {
        category: "空间想象 Spatial",
        title: "第十四题：观察下方给出的不对称图形，如果沿垂直的中心虚线进行<b>镜像翻转</b>，它会变成什么形状？",
        type: "graphic",
        dimension: "spatial",
        weight: 2,
        visualSVG: `
            <svg viewBox="0 0 200 120" width="100%" height="100%">
                <line x1="100" y1="10" x2="100" y2="110" stroke="#00f2fe" stroke-width="2" stroke-dasharray="6"/>
                <polygon points="40,30 80,30 90,60 50,90 20,60" fill="rgba(177, 108, 255, 0.4)" stroke="#b16cff" stroke-width="2"/>
            </svg>
        `,
        options: [
            `<svg viewBox="0 0 100 100" width="100%" height="100%"><polygon points="60,20 20,20 10,50 50,80 80,50" fill="rgba(177, 108, 255, 0.4)" stroke="#b16cff" stroke-width="2"/></svg>`,
            `<svg viewBox="0 0 100 100" width="100%" height="100%"><polygon points="40,20 80,20 90,50 50,80 20,50" fill="rgba(177, 108, 255, 0.4)" stroke="#b16cff" stroke-width="2"/></svg>`,
            `<svg viewBox="0 0 100 100" width="100%" height="100%"><polygon points="50,20 90,50 80,80 40,80 10,50" fill="rgba(177, 108, 255, 0.4)" stroke="#b16cff" stroke-width="2"/></svg>`,
            `<svg viewBox="0 0 100 100" width="100%" height="100%"><polygon points="20,20 60,20 90,50 50,80 10,50" fill="rgba(177, 108, 255, 0.4)" stroke="#b16cff" stroke-width="2"/></svg>`
        ],
        isGraphicOptions: true,
        gridOptions: true,
        correctIndex: 0
    },
    {
        category: "模式识别 Pattern",
        title: "第十五题：寻找数字运算规律。观察以下圆环内的数字分布，求问号 [ ? ] 处的数字应是多少？",
        type: "graphic",
        dimension: "pattern",
        weight: 3,
        visualSVG: `
            <svg viewBox="0 0 320 120" width="100%" height="100%">
                <!-- Circle 1: Top=5, Right=4, Bottom=8, Left=12 (5*4 - 8 = 12) -->
                <g transform="translate(50, 60)">
                    <circle cx="0" cy="0" r="40" fill="none" stroke="#00f2fe" stroke-width="2"/>
                    <line x1="-40" y1="0" x2="40" y2="0" stroke="rgba(255,255,255,0.2)"/>
                    <line x1="0" y1="-40" x2="0" y2="40" stroke="rgba(255,255,255,0.2)"/>
                    <text x="0" y="-15" fill="#f8fafc" font-size="14" font-weight="700" text-anchor="middle">5</text>
                    <text x="20" y="5" fill="#f8fafc" font-size="14" font-weight="700" text-anchor="middle">4</text>
                    <text x="0" y="25" fill="#f8fafc" font-size="14" font-weight="700" text-anchor="middle">8</text>
                    <text x="-20" y="5" fill="#00f2fe" font-size="16" font-weight="800" text-anchor="middle">12</text>
                </g>
                
                <!-- Circle 2: Top=6, Right=3, Bottom=7, Left=11 (6*3 - 7 = 11) -->
                <g transform="translate(160, 60)">
                    <circle cx="0" cy="0" r="40" fill="none" stroke="#00f2fe" stroke-width="2"/>
                    <line x1="-40" y1="0" x2="40" y2="0" stroke="rgba(255,255,255,0.2)"/>
                    <line x1="0" y1="-40" x2="0" y2="40" stroke="rgba(255,255,255,0.2)"/>
                    <text x="0" y="-15" fill="#f8fafc" font-size="14" font-weight="700" text-anchor="middle">6</text>
                    <text x="20" y="5" fill="#f8fafc" font-size="14" font-weight="700" text-anchor="middle">3</text>
                    <text x="0" y="25" fill="#f8fafc" font-size="14" font-weight="700" text-anchor="middle">7</text>
                    <text x="-20" y="5" fill="#00f2fe" font-size="16" font-weight="800" text-anchor="middle">11</text>
                </g>
                
                <!-- Circle 3: Top=8, Right=5, Bottom=15, Left=? (8*5 - 15 = 25) -->
                <g transform="translate(270, 60)">
                    <circle cx="0" cy="0" r="40" fill="none" stroke="#b16cff" stroke-width="2.5"/>
                    <line x1="-40" y1="0" x2="40" y2="0" stroke="rgba(255,255,255,0.2)"/>
                    <line x1="0" y1="-40" x2="0" y2="40" stroke="rgba(255,255,255,0.2)"/>
                    <text x="0" y="-15" fill="#f8fafc" font-size="14" font-weight="700" text-anchor="middle">8</text>
                    <text x="20" y="5" fill="#f8fafc" font-size="14" font-weight="700" text-anchor="middle">5</text>
                    <text x="0" y="25" fill="#f8fafc" font-size="14" font-weight="700" text-anchor="middle">15</text>
                    <text x="-20" y="6" fill="#b16cff" font-size="20" font-weight="800" text-anchor="middle">?</text>
                </g>
            </svg>
        `,
        options: ["20", "25", "30", "35"],
        correctIndex: 1
    },
    {
        category: "分析推理 Analytical",
        title: "第十六题：逻辑三段论推演。已知：<br>1. 所有闪光的东西都不是真金。<br>2. 有些金属是闪光的东西。<br>根据以上前提，必然可以得出以下哪项结论？",
        type: "text",
        dimension: "anal",
        weight: 2,
        options: ["所有金属都不是真金", "有些金属不是真金", "有些真金不是金属", "闪光的东西都是金属"],
        correctIndex: 1
    },
    {
        category: "数理逻辑 Math & Logic",
        title: "第十七题：一个盲盒袋子里装有 3 个红球和 2 个白球。如果您闭着眼睛随机从中同时抽出 2 个球，这两个球颜色<b>不相同</b>（即一红一白）的概率是多少？",
        type: "text",
        dimension: "math",
        weight: 3,
        options: ["40%", "50%", "60%", "70%"],
        correctIndex: 2
    },
    {
        category: "空间想象 Spatial",
        title: "第十八题：将一张正方形纸片先上下对折，再左右对折。然后在中心位置剪去一个小圆孔。将纸片完全展开后，会看到什么样的图案？",
        type: "graphic",
        dimension: "spatial",
        weight: 3,
        visualSVG: `
            <svg viewBox="0 0 320 120" width="100%" height="100%">
                <!-- Step 1: Square down -->
                <g transform="translate(40, 60)">
                    <rect x="-30" y="-30" width="60" height="60" fill="none" stroke="#00f2fe" stroke-width="2"/>
                    <line x1="-40" y1="0" x2="40" y2="0" stroke="rgba(0, 242, 254, 0.4)" stroke-dasharray="4"/>
                    <path d="M0,-15 L0,5 M-5,0 L0,5 L5,0" fill="none" stroke="#b16cff" stroke-width="2"/>
                </g>
                <text x="100" y="65" fill="#f8fafc" font-size="16" font-weight="700" text-anchor="middle">➜</text>
                
                <!-- Step 2: Rectangle right -->
                <g transform="translate(160, 60)">
                    <rect x="-30" y="0" width="60" height="30" fill="none" stroke="#00f2fe" stroke-width="2"/>
                    <line x1="0" y1="-10" x2="0" y2="40" stroke="rgba(0, 242, 254, 0.4)" stroke-dasharray="4"/>
                    <path d="M-15,15 L5,15 M0,10 L5,15 L0,20" fill="none" stroke="#b16cff" stroke-width="2"/>
                </g>
                <text x="220" y="65" fill="#f8fafc" font-size="16" font-weight="700" text-anchor="middle">➜</text>

                <!-- Step 3: Small square with cut -->
                <g transform="translate(280, 60)">
                    <rect x="0" y="0" width="30" height="30" fill="rgba(0, 242, 254, 0.1)" stroke="#00f2fe" stroke-width="2"/>
                    <circle cx="15" cy="15" r="5" fill="#070b19" stroke="#b16cff" stroke-width="1.5"/>
                    <line x1="-10" y1="-10" x2="40" y2="40" stroke="rgba(255,0,0,0.5)" stroke-width="1" stroke-dasharray="3"/>
                    <text x="15" y="-15" fill="var(--text-muted)" font-size="10" font-weight="700" text-anchor="middle">中心剪孔</text>
                </g>
            </svg>
        `,
        options: [
            // Option 0: 1 hole in center
            `<svg viewBox="0 0 100 100" width="100%" height="100%"><rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
            // Option 1: 4 holes in quadrants (Correct)
            `<svg viewBox="0 0 100 100" width="100%" height="100%"><rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="30" cy="30" r="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="70" cy="30" r="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="30" cy="70" r="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="70" cy="70" r="6" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
            // Option 2: 2 holes
            `<svg viewBox="0 0 100 100" width="100%" height="100%"><rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="30" cy="50" r="8" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="70" cy="50" r="8" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
            // Option 3: 4 holes at edges
            `<svg viewBox="0 0 100 100" width="100%" height="100%"><rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="50" cy="10" r="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="50" cy="90" r="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="10" cy="50" r="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="90" cy="50" r="6" fill="none" stroke="currentColor" stroke-width="2"/></svg>`
        ],
        isGraphicOptions: true,
        gridOptions: true,
        correctIndex: 1
    }
];

// ================= GAME ENGINE STATE =================
let gameState = {
    playerName: "旅行者",
    currentQuestionIndex: 0,
    answers: [], // Stores { isCorrect, timeSpent, dimension, weight }
    timerInterval: null,
    timeLeft: 30,
    currentQuestionStartTime: 0
};

// DOM Cache
const dom = {
    homeScreen: document.getElementById("home-screen"),
    gameScreen: document.getElementById("game-screen"),
    resultsScreen: document.getElementById("results-screen"),
    certDrawer: document.getElementById("cert-drawer"),
    
    // Inputs/Buttons
    inputName: document.getElementById("player-name"),
    btnStart: document.getElementById("btn-start"),
    btnRestart: document.getElementById("btn-restart"),
    btnShowCert: document.getElementById("btn-show-cert"),
    btnCloseCert: document.getElementById("btn-close-cert"),
    btnDownloadCert: document.getElementById("btn-download-cert"),
    
    // Gameplay
    progressLabel: document.getElementById("question-progress-label"),
    difficultyLabel: document.getElementById("question-difficulty-label"),
    progressFill: document.getElementById("progress-fill"),
    timerFill: document.getElementById("timer-fill"),
    timerCounter: document.getElementById("timer-counter"),
    questionCategory: document.getElementById("question-category"),
    questionTitle: document.getElementById("question-title"),
    visualPanel: document.getElementById("visual-panel"),
    optionsBox: document.getElementById("options-box"),
    
    // Results
    welcomeMsg: document.getElementById("welcome-back-msg"),
    finalIq: document.getElementById("final-iq-val"),
    finalTier: document.getElementById("final-tier-val"),
    finalEvaluation: document.getElementById("final-evaluation-desc"),
    radarPoly: document.getElementById("radar-poly"),
    pillMath: document.getElementById("pill-math"),
    pillSpatial: document.getElementById("pill-spatial"),
    pillAnal: document.getElementById("pill-anal"),
    pillPattern: document.getElementById("pill-pattern"),
    
    // Certificate Modal
    certUser: document.getElementById("cert-user-name"),
    certScore: document.getElementById("cert-score-val"),
    certTierDesc: document.getElementById("cert-tier-desc"),
    certSerial: document.getElementById("cert-serial-no"),
    certDate: document.getElementById("cert-date"),
    certCanvas: document.getElementById("cert-export-canvas"),
    
    // Custom Alert Toast
    customAlert: document.getElementById("custom-alert"),
    alertIcon: document.getElementById("alert-icon"),
    alertMsg: document.getElementById("alert-msg")
};

// Initialize listeners
window.addEventListener("DOMContentLoaded", () => {
    dom.btnStart.addEventListener("click", startTest);
    dom.btnRestart.addEventListener("click", resetTest);
    dom.btnShowCert.addEventListener("click", showCertificate);
    dom.btnCloseCert.addEventListener("click", hideCertificate);
    dom.btnDownloadCert.addEventListener("click", downloadCertificatePNG);
});

// Toast notification helper
function showToast(message, icon = "⚡") {
    dom.alertIcon.textContent = icon;
    dom.alertMsg.textContent = message;
    dom.customAlert.classList.add("active");
    
    setTimeout(() => {
        dom.customAlert.classList.remove("active");
    }, 2800);
}

// Start Game Event
function startTest() {
    const rawName = dom.inputName.value.trim();
    if (!rawName) {
        showToast("旅行者，请先输入您的代号！", "🛑");
        dom.inputName.focus();
        return;
    }
    
    gameState.playerName = rawName;
    gameState.currentQuestionIndex = 0;
    gameState.answers = [];
    
    switchScreen(dom.homeScreen, dom.gameScreen);
    loadQuestion(0);
}

// Custom slide/fade transition helper
function switchScreen(fromScreen, toScreen) {
    fromScreen.classList.remove("active");
    setTimeout(() => {
        fromScreen.style.display = "none";
        toScreen.style.display = "flex";
        setTimeout(() => {
            toScreen.classList.add("active");
        }, 50);
    }, 300);
}

// Load individual question
function loadQuestion(index) {
    if (index >= QUESTIONS.length) {
        completeTest();
        return;
    }
    
    gameState.currentQuestionIndex = index;
    const q = QUESTIONS[index];
    
    // Reset timer state
    clearInterval(gameState.timerInterval);
    gameState.timeLeft = 30;
    gameState.currentQuestionStartTime = Date.now();
    
    // Update progress headers
    dom.progressLabel.textContent = `进度: ${index + 1} / ${QUESTIONS.length}`;
    dom.progressFill.style.width = `${((index + 1) / QUESTIONS.length) * 100}%`;
    
    // Weight difficulty naming
    let diffName = "中等";
    if (q.weight === 1) diffName = "初级";
    if (q.weight === 3) diffName = "专家";
    dom.difficultyLabel.textContent = `难度: ${diffName}`;
    dom.difficultyLabel.style.color = q.weight === 3 ? "var(--secondary)" : q.weight === 1 ? "var(--primary)" : "#f8fafc";
    
    // Inject question metadata
    dom.questionCategory.textContent = q.category;
    dom.questionTitle.innerHTML = q.title;
    
    // Visual Graphic container layout
    if (q.type === "graphic" && q.visualSVG) {
        dom.visualPanel.innerHTML = q.visualSVG;
        dom.visualPanel.style.display = "flex";
    } else {
        dom.visualPanel.style.display = "none";
        dom.visualPanel.innerHTML = "";
    }
    
    // Render dynamic options
    dom.optionsBox.innerHTML = "";
    if (q.gridOptions) {
        dom.optionsBox.classList.add("grid-layout");
    } else {
        dom.optionsBox.classList.remove("grid-layout");
    }
    
    q.options.forEach((opt, idx) => {
        const optionItem = document.createElement("div");
        optionItem.className = "option-item";
        if (q.isGraphicOptions) {
            optionItem.classList.add("graphic-option");
        }
        
        const letter = String.fromCharCode(65 + idx); // A, B, C, D
        
        optionItem.innerHTML = `
            <div class="option-marker">${letter}</div>
            <div class="option-content">${opt}</div>
        `;
        
        optionItem.addEventListener("click", () => handleSelectOption(idx));
        dom.optionsBox.appendChild(optionItem);
    });
    
    // Trigger animated countdown
    startTimer();
}

// Timer management
function startTimer() {
    updateTimerUI();
    
    gameState.timerInterval = setInterval(() => {
        gameState.timeLeft--;
        updateTimerUI();
        
        // Critical countdown visual pulse
        if (gameState.timeLeft <= 5) {
            dom.timerCounter.style.color = "var(--secondary-alt)";
            dom.timerCounter.style.animation = "pulseGlow 0.5s infinite ease-in-out";
        } else {
            dom.timerCounter.style.color = "var(--primary)";
            dom.timerCounter.style.animation = "none";
        }
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timerInterval);
            handleTimeout();
        }
    }, 1000);
}

function updateTimerUI() {
    dom.timerCounter.textContent = gameState.timeLeft;
    
    // Circular SVG dashoffset animation
    const maxOffset = 176;
    const offset = maxOffset * (1 - (gameState.timeLeft / 30));
    dom.timerFill.style.strokeDashoffset = offset;
}

// Timeout handler
function handleTimeout() {
    showToast("答题时间已耗尽！", "⏱️");
    saveAnswer(false, 30);
    
    setTimeout(() => {
        loadQuestion(gameState.currentQuestionIndex + 1);
    }, 1200);
}

// User selection handler
function handleSelectOption(selectedIndex) {
    clearInterval(gameState.timerInterval);
    
    // Highlights the selected card
    const optionCards = dom.optionsBox.querySelectorAll(".option-item");
    optionCards.forEach((c, idx) => {
        if (idx === selectedIndex) {
            c.classList.add("selected");
        } else {
            c.classList.remove("selected");
        }
    });
    
    const q = QUESTIONS[gameState.currentQuestionIndex];
    const isCorrect = (selectedIndex === q.correctIndex);
    const timeSpent = Math.min(30, Math.round((Date.now() - gameState.currentQuestionStartTime) / 1000));
    
    saveAnswer(isCorrect, timeSpent);
    
    // Smooth transition buffer to review selected outline
    setTimeout(() => {
        loadQuestion(gameState.currentQuestionIndex + 1);
    }, 450);
}

// Stores answer metrics
function saveAnswer(isCorrect, timeSpent) {
    const q = QUESTIONS[gameState.currentQuestionIndex];
    gameState.answers.push({
        isCorrect: isCorrect,
        timeSpent: timeSpent,
        dimension: q.dimension,
        weight: q.weight
    });
}

// ================= SCORE ENGINE & EVALUATION =================
function completeTest() {
    switchScreen(dom.gameScreen, dom.resultsScreen);
    
    // Compile dimensional results
    let dimensionScores = {
        math: { totalWeight: 0, scoredWeight: 0 },
        spatial: { totalWeight: 0, scoredWeight: 0 },
        anal: { totalWeight: 0, scoredWeight: 0 },
        pattern: { totalWeight: 0, scoredWeight: 0 }
    };
    
    let totalQuestionsWeight = 0;
    let scoredQuestionsWeight = 0;
    let totalSpeedBonus = 0; // Speed incentive for correctly answered tasks
    
    gameState.answers.forEach(ans => {
        totalQuestionsWeight += ans.weight;
        dimensionScores[ans.dimension].totalWeight += ans.weight;
        
        if (ans.isCorrect) {
            scoredQuestionsWeight += ans.weight;
            dimensionScores[ans.dimension].scoredWeight += ans.weight;
            
            // Speed calculation: response within 12 seconds scores additional speed multipliers
            if (ans.timeSpent < 12) {
                totalSpeedBonus += (12 - ans.timeSpent) * 0.45; 
            }
        }
    });
    
    // Scale IQ Score (Mensa range 70 to 150)
    const accuracyRatio = scoredQuestionsWeight / totalQuestionsWeight;
    let calculatedIQ = 70 + Math.round(accuracyRatio * 70) + Math.round(Math.min(10, totalSpeedBonus));
    calculatedIQ = Math.max(70, Math.min(150, calculatedIQ)); // Force standard distribution boundaries
    
    // Compile dimension percentages
    let dimensionsResult = {};
    for (const key in dimensionScores) {
        const item = dimensionScores[key];
        const percent = item.totalWeight > 0 ? Math.round((item.scoredWeight / item.totalWeight) * 100) : 20;
        // Keep a minimum threshold of 20% for aesthetic charts
        dimensionsResult[key] = Math.max(20, percent);
    }
    
    // Animate the main Score Counter (Odometer effect)
    animateScoreCounter(calculatedIQ);
    
    // Determine intellectual classification tier
    let tierName = "";
    let tierDesc = "";
    let systemEvaluation = "";
    
    if (calculatedIQ >= 140) {
        tierName = "Genius 终极神童 / 圣人级";
        tierDesc = "您的思维频段已经完全超越普通阈值，具备无可挑剔的顶级逻辑穿透力与空间构造能级，是千万分之一的超级脑域觉醒者。";
        systemEvaluation = "表现非凡！您的大脑对几何重构及高阶数学递推的反应极为敏锐，展现出 Mensa 顶尖俱乐部的空间逻辑洞察力。";
    } else if (calculatedIQ >= 125) {
        tierName = "Gifted 高阶思维巨匠";
        tierDesc = "您拥有令人艳羡的高敏信息统筹力。能在极短时间内对复杂模式展开无缝解构，逻辑推演和空间感知皆居于极高层次。";
        systemEvaluation = "极为优秀！您在图形序列以及抽象类比题目的演算法上有着出众的理解深度，反应精准而敏捷。";
    } else if (calculatedIQ >= 110) {
        tierName = "Above Average 优等智慧学者";
        tierDesc = "您的认知能力表现不俗，在空间图形敏感度与多线逻辑归纳方面展现出稳固、连贯的高水平输出。";
        systemEvaluation = "表现优异。在数学推理与矛盾排除中显示出良好的抗干扰性，思维周密踏实。";
    } else if (calculatedIQ >= 90) {
        tierName = "Average 均衡发展探索者";
        tierDesc = "您具备非常均衡且健康的智力框架，擅长按部就班地解构常见问题，各项逻辑指标均在常人标准区间稳步运行。";
        systemEvaluation = "认知力稳定。在标准空间重组及词汇推理上表现良好，保持专注即可完成更高难度的推理。";
    } else {
        tierName = "Cognitive Explorer 初阶思维开拓者";
        tierDesc = "您具备基础的模式识别习惯。在应对复杂的限时抽象推理时，若进行更多维度的逻辑专项训练，思维能级可获大幅提升。";
        systemEvaluation = "已完成所有维度的初步鉴定。建议在以后的日常活动中增强立体空间想象与数列推演的练习。";
    }
    
    // Populate Results DOM text
    dom.welcomeMsg.textContent = `${gameState.playerName} 的鉴定报告`;
    dom.finalTier.textContent = tierName;
    dom.finalEvaluation.textContent = tierDesc;
    
    dom.pillMath.textContent = `${dimensionsResult.math}%`;
    dom.pillSpatial.textContent = `${dimensionsResult.spatial}%`;
    dom.pillAnal.textContent = `${dimensionsResult.anal}%`;
    dom.pillPattern.textContent = `${dimensionsResult.pattern}%`;
    
    // Draw Dynamic SVG Radar Polygon
    drawRadarChart(dimensionsResult);
    
    // Configure Certificate fields
    dom.certUser.textContent = gameState.playerName;
    dom.certScore.textContent = `IQ ${calculatedIQ}`;
    dom.certTierDesc.textContent = systemEvaluation;
    
    // Dynamic metadata for certificate
    const serial = `CB-${10000 + Math.floor(Math.random() * 90000)}-${new Date().getFullYear()}`;
    dom.certSerial.textContent = serial;
    
    const now = new Date();
    dom.certDate.textContent = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;
}

// Odometer count-up animation
function animateScoreCounter(targetVal) {
    let currentVal = 60;
    const duration = 1500; // ms
    const stepTime = Math.max(10, Math.floor(duration / (targetVal - currentVal)));
    
    const countInterval = setInterval(() => {
        currentVal++;
        dom.finalIq.textContent = currentVal;
        
        if (currentVal >= targetVal) {
            clearInterval(countInterval);
            dom.finalIq.textContent = targetVal;
        }
    }, stepTime);
}

// Render dynamic Radar Chart SVG points
// Coordinate system: center is (100, 100). radius is 80.
function drawRadarChart(results) {
    const center = 100;
    const maxRadius = 80;
    
    // Math (Top): angle -90deg (dx = 0, dy = -r)
    const mathVal = results.math / 100;
    const pMath = { x: center, y: center - (maxRadius * mathVal) };
    
    // Spatial (Right): angle 0deg (dx = r, dy = 0)
    const spatialVal = results.spatial / 100;
    const pSpatial = { x: center + (maxRadius * spatialVal), y: center };
    
    // Analytical (Bottom): angle 90deg (dx = 0, dy = r)
    const analVal = results.anal / 100;
    const pAnal = { x: center, y: center + (maxRadius * analVal) };
    
    // Pattern (Left): angle 180deg (dx = -r, dy = 0)
    const patternVal = results.pattern / 100;
    const pPattern = { x: center - (maxRadius * patternVal), y: center };
    
    // Set points coordinates into SVG polygon
    const pointsStr = `${pMath.x},${pMath.y} ${pSpatial.x},${pSpatial.y} ${pAnal.x},${pAnal.y} ${pPattern.x},${pPattern.y}`;
    dom.radarPoly.setAttribute("points", pointsStr);
}

// ================= CERTIFICATE GENERATOR =================
function showCertificate() {
    dom.certDrawer.classList.add("active");
}

function hideCertificate() {
    dom.certDrawer.classList.remove("active");
}

// Reset Game state
function resetTest() {
    gameState.currentQuestionIndex = 0;
    gameState.answers = [];
    dom.inputName.value = "";
    
    switchScreen(dom.resultsScreen, dom.homeScreen);
}

// Render clean png layout via HTML5 canvas for custom download
function downloadCertificatePNG() {
    const ctx = dom.certCanvas.getContext("2d");
    const w = dom.certCanvas.width;
    const h = dom.certCanvas.height;
    
    // 1. Solid deep cosmic background gradient
    const bgGrad = ctx.createRadialGradient(w/2, h/2, 50, w/2, h/2, w);
    bgGrad.addColorStop(0, "#0f172a");
    bgGrad.addColorStop(1, "#070b19");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);
    
    // 2. High-end golden double border grids
    ctx.strokeStyle = "rgba(0, 242, 254, 0.4)";
    ctx.lineWidth = 4;
    ctx.strokeRect(20, 20, w - 40, h - 40);
    
    ctx.strokeStyle = "rgba(177, 108, 255, 0.25)";
    ctx.lineWidth = 1;
    ctx.setLineDash([8, 6]);
    ctx.strokeRect(32, 32, w - 64, h - 64);
    ctx.setLineDash([]); // Reset
    
    // Corner abstract gears / frames
    ctx.fillStyle = "rgba(0, 242, 254, 0.15)";
    ctx.fillRect(20, 20, 30, 4);
    ctx.fillRect(20, 20, 4, 30);
    ctx.fillRect(w - 50, 20, 30, 4);
    ctx.fillRect(w - 24, 20, 4, 30);
    ctx.fillRect(20, h - 24, 30, 4);
    ctx.fillRect(20, h - 50, 4, 30);
    ctx.fillRect(w - 50, h - 24, 30, 4);
    ctx.fillRect(w - 24, h - 50, 4, 30);
    
    // 3. Certificate Texts
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    // Title
    ctx.font = "800 28px 'Outfit', 'Helvetica Neue', Arial, sans-serif";
    const titleGrad = ctx.createLinearGradient(100, 0, 700, 0);
    titleGrad.addColorStop(0, "#00f2fe");
    titleGrad.addColorStop(1, "#b16cff");
    ctx.fillStyle = titleGrad;
    ctx.fillText("COSMIC BRAIN ACADEMY", w/2, 95);
    
    ctx.font = "bold 13px Arial, sans-serif";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("脑 域 开 发 鉴 定 中 心 证 书", w/2, 135);
    
    // Body Text
    ctx.font = "18px 'Inter', Arial, sans-serif";
    ctx.fillStyle = "#cbd5e1";
    ctx.fillText("兹证明旅行者", w/2, 205);
    
    // User Name
    ctx.font = "800 36px 'Outfit', 'Helvetica Neue', Arial, sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(gameState.playerName, w/2, 255);
    
    // Underline
    ctx.strokeStyle = "#00f2fe";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w/2 - 120, 285);
    ctx.lineTo(w/2 + 120, 285);
    ctx.stroke();
    
    ctx.font = "18px 'Inter', Arial, sans-serif";
    ctx.fillStyle = "#cbd5e1";
    ctx.fillText("在本次 Cosmic 全维度脑部测试中，以极高的思维敏感度及精密逻辑度，", w/2, 325);
    ctx.fillText("成功通过所有测试指标挑战。特此授予综合智力评价：", w/2, 355);
    
    // Score Badge
    ctx.font = "800 52px 'Outfit', 'Helvetica Neue', Arial, sans-serif";
    const scoreGrad = ctx.createLinearGradient(0, 390, 0, 470);
    scoreGrad.addColorStop(0, "#b16cff");
    scoreGrad.addColorStop(1, "#eb3349");
    ctx.fillStyle = scoreGrad;
    ctx.fillText(dom.certScore.textContent, w/2, 425);
    
    // Brief evaluation description
    ctx.font = "italic 15px Arial, sans-serif";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText(dom.certTierDesc.textContent, w/2, 480);
    
    // 4. Seals & Footer
    ctx.textAlign = "left";
    ctx.font = "11px Arial, sans-serif";
    ctx.fillStyle = "#64748b";
    ctx.fillText(`鉴定编号: ${dom.certSerial.textContent}`, 60, 530);
    ctx.fillText(`测试时间: ${dom.certDate.textContent}`, 60, 550);
    
    ctx.textAlign = "right";
    ctx.fillText("Cosmic Brain Academy", w - 60, 520);
    ctx.font = "bold 12px Arial, sans-serif";
    ctx.fillStyle = "#00f2fe";
    ctx.fillText("官方学术认证鉴定委员会", w - 60, 545);
    
    // Circular Gold Seal drawing in bottom-middle
    ctx.strokeStyle = "rgba(255, 215, 0, 0.4)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(w/2, 535, 20, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.fillStyle = "rgba(255, 215, 0, 0.8)";
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("★ CERT ★", w/2, 539);
    
    // 5. Trigger Simulated Download link click
    try {
        const link = document.createElement("a");
        link.download = `Cosmic_IQ_Certificate_${gameState.playerName}.png`;
        link.href = dom.certCanvas.toDataURL("image/png");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast("证书保存成功！正在启动下载...", "🎉");
    } catch(err) {
        console.error("Certificate Canvas download blocked: ", err);
        showToast("由于浏览器权限限制，请直接截图保存！", "⚠️");
    }
}
