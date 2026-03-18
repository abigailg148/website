// Extensive question bank based on past exam paper style questions
// Each topic has 10+ questions for thorough practice

const topics = {
    'edexcel-maths': [
        'Pure Maths: Algebra and Functions',
        'Pure Maths: Coordinate Geometry',
        'Pure Maths: Sequences and Series',
        'Pure Maths: Trigonometry',
        'Pure Maths: Exponentials and Logarithms',
        'Pure Maths: Differentiation',
        'Pure Maths: Integration',
        'Pure Maths: Vectors',
        'Pure Maths: Proof',
        'Pure Maths: Numerical Methods',
        'Statistics: Data Collection',
        'Statistics: Data Presentation and Interpretation',
        'Statistics: Probability',
        'Statistics: Statistical Distributions',
        'Statistics: Hypothesis Testing',
        'Statistics: Correlation and Regression',
        'Mechanics: Kinematics',
        'Mechanics: Forces and Newton\'s Laws',
        'Mechanics: Moments',
        'Mechanics: Projectiles'
    ],
    'edexcel-further-maths': [
        'Further Pure: Complex Numbers',
        'Further Pure: Matrices',
        'Further Pure: Differential Equations',
        'Further Pure: Polar Coordinates',
        'Further Pure: Hyperbolic Functions',
        'Further Pure: Further Vectors',
        'Further Pure: Further Calculus',
        'Further Stats 1: Discrete Random Variables',
        'Further Stats 1: Poisson Distribution',
        'Further Stats 1: Continuous Random Variables',
        'Further Stats 1: Chi-squared Tests',
        'Further Stats 1: Probability Generating Functions',
        'Further Mechanics 1: Momentum and Impulse',
        'Further Mechanics 1: Work, Energy and Power',
        'Further Mechanics 1: Elastic Strings and Springs',
        'Further Mechanics 1: Elastic Collisions'
    ],
    'ocr-cs': [
        'Component 1: Data Types',
        'Component 1: Data Structures',
        'Component 1: Boolean Algebra',
        'Component 1: Software Development',
        'Component 1: Algorithms',
        'Component 1: Programming Paradigms',
        'Component 2: Computer Architecture',
        'Component 2: Communication and Networking',
        'Component 2: Databases',
        'Component 2: Operating Systems',
        'Component 2: Legal and Ethical Issues',
        'Component 2: Computational Thinking'
    ]
};

const questionBank = {
    'edexcel-maths': {
        'Pure Maths: Algebra and Functions': [
            {
                question: "Solve the equation 2x² + 5x - 3 = 0 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Use quadratic formula or factorization\nM1: Correct working shown\nA1: x = 1/2 or x = -3"
            },
            {
                question: "Express x² - 6x + 2 in the form (x - a)² + b [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Half the coefficient of x to get a = 3\nM1: Calculate (x - 3)² = x² - 6x + 9\nA1: (x - 3)² - 7"
            },
            {
                question: "Factorise completely 3x² - 12 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Take out common factor 3\nA1: 3(x + 2)(x - 2)"
            },
            {
                question: "Solve the simultaneous equations: 2x + y = 7 and x - y = 2 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Eliminate one variable\nM1: Solve for one variable (x = 3)\nA1: Find second variable (y = 1)"
            },
            {
                question: "Solve the inequality 3x - 5 < 10 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Rearrange correctly (3x < 15)\nA1: x < 5"
            },
            {
                question: "Given f(x) = 2x + 3 and g(x) = x², find fg(x) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: fg(x) = f(g(x)) = f(x²)\nA1: 2x² + 3"
            },
            {
                question: "Solve 5x² = 45 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Divide to get x² = 9\nA1: x = ±3"
            },
            {
                question: "The function f is defined by f(x) = 3x - 1. Find f⁻¹(x) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Let y = 3x - 1\nM1: Rearrange for x\nA1: f⁻¹(x) = (x + 1)/3"
            },
            {
                question: "Simplify (2x³)² × 3x⁴ [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Expand to get 4x⁶ × 3x⁴\nA1: 12x¹⁰"
            },
            {
                question: "Solve the equation |2x - 3| = 5 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Set up two equations: 2x - 3 = 5 or 2x - 3 = -5\nM1: Solve first equation (x = 4)\nA1: Solve second equation (x = -1)"
            },
            {
                question: "Express 2/(x-1) + 3/(x+2) as a single fraction [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Common denominator (x-1)(x+2)\nM1: Combine numerators 2(x+2) + 3(x-1)\nA1: (5x+1)/[(x-1)(x+2)]"
            },
            {
                question: "Solve x² + 4x - 1 = 0 giving your answers in surd form [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Use quadratic formula\nM1: x = (-4 ± √20)/2\nA1: x = -2 ± √5"
            }
        ],
        'Pure Maths: Coordinate Geometry': [
            {
                question: "Find the equation of the line passing through (2, 3) with gradient -2 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Use y - y₁ = m(x - x₁)\nA1: y = -2x + 7"
            },
            {
                question: "Find the gradient of the line joining A(1, 4) and B(3, 10) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: m = (y₂ - y₁)/(x₂ - x₁)\nA1: m = 3"
            },
            {
                question: "A circle has equation (x - 2)² + (y + 3)² = 25. State the centre and radius [2 marks]",
                totalMarks: 2,
                markScheme: "B1: Centre (2, -3)\nB1: Radius 5"
            },
            {
                question: "Find the equation of the line perpendicular to y = 2x + 1 passing through (4, 5) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Perpendicular gradient = -1/2\nM1: Use point-slope form\nA1: y = -x/2 + 7"
            },
            {
                question: "Find the distance between A(1, 2) and B(4, 6) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: √[(4-1)² + (6-2)²]\nA1: 5"
            },
            {
                question: "Find the midpoint of the line segment joining P(-2, 5) and Q(4, 1) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Use midpoint formula\nA1: (1, 3)"
            },
            {
                question: "The line L passes through (3, 2) and is parallel to y = 4x - 1. Find the equation of L [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Same gradient m = 4\nA1: y = 4x - 10"
            },
            {
                question: "Find the equation of the circle with centre (1, -2) and radius 3 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Use (x - a)² + (y - b)² = r²\nA1: (x - 1)² + (y + 2)² = 9"
            },
            {
                question: "Show that the points A(0, 2), B(3, 5) and C(6, 8) are collinear [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Find gradient AB = 1\nM1: Find gradient BC = 1\nA1: Gradients equal so collinear"
            },
            {
                question: "Find the equation of the perpendicular bisector of the line segment AB where A = (1, 3) and B = (5, 7) [4 marks]",
                totalMarks: 4,
                markScheme: "M1: Find midpoint (3, 5)\nM1: Find gradient of AB = 1\nM1: Perpendicular gradient = -1\nA1: y = -x + 8"
            },
            {
                question: "The line 3x + 4y = 12 meets the x-axis at A and the y-axis at B. Find the length AB [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Find A(4, 0) and B(0, 3)\nM1: Use distance formula\nA1: 5"
            },
            {
                question: "Find the equation of the tangent to the circle x² + y² = 25 at the point (3, 4) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Gradient of radius = 4/3\nM1: Tangent gradient = -3/4\nA1: 3x + 4y = 25"
            }
        ],
        'Pure Maths: Sequences and Series': [
            {
                question: "An arithmetic sequence has first term 5 and common difference 3. Find the 10th term [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Use uₙ = a + (n-1)d\nA1: u₁₀ = 32"
            },
            {
                question: "A geometric sequence has first term 2 and common ratio 3. Find the sum of the first 5 terms [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Use Sₙ = a(rⁿ - 1)/(r - 1)\nM1: Substitute values\nA1: S₅ = 242"
            },
            {
                question: "Find the sum of the first 20 terms of the arithmetic sequence 3, 7, 11, 15, ... [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Identify a = 3, d = 4\nM1: Use Sₙ = n/2[2a + (n-1)d]\nA1: S₂₀ = 820"
            },
            {
                question: "A geometric series has first term 8 and common ratio 1/2. Find the sum to infinity [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Use S∞ = a/(1-r)\nA1: S∞ = 16"
            },
            {
                question: "The sum of the first n terms of a sequence is given by Sₙ = 2n² + 3n. Find the 5th term [3 marks]",
                totalMarks: 3,
                markScheme: "M1: u₅ = S₅ - S₄\nM1: Calculate S₅ = 65 and S₄ = 44\nA1: u₅ = 21"
            },
            {
                question: "Expand (1 + 2x)⁴ using the binomial theorem [4 marks]",
                totalMarks: 4,
                markScheme: "M1: Use binomial coefficients\nM1: (1) + 4(2x) + 6(2x)²\nM1: + 4(2x)³ + (2x)⁴\nA1: 1 + 8x + 24x² + 32x³ + 16x⁴"
            },
            {
                question: "Find the coefficient of x³ in the expansion of (2 + x)⁵ [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Use ⁵C₃(2)²(x)³\nM1: Calculate ⁵C₃ = 10\nA1: Coefficient = 40"
            },
            {
                question: "The nth term of a sequence is given by uₙ = 3n - 1. Find the sum of the first 50 terms [3 marks]",
                totalMarks: 3,
                markScheme: "M1: This is arithmetic with a = 2, d = 3\nM1: Use Sₙ = n/2[2a + (n-1)d]\nA1: S₅₀ = 3775"
            },
            {
                question: "A geometric series has first term 5 and sum to infinity 20. Find the common ratio [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Use S∞ = a/(1-r)\nM1: 20 = 5/(1-r)\nA1: r = 3/4 or 0.75"
            },
            {
                question: "Find the sum: 2 + 5 + 8 + 11 + ... + 98 [4 marks]",
                totalMarks: 4,
                markScheme: "M1: Arithmetic sequence with a = 2, d = 3\nM1: Find n using 98 = 2 + (n-1)×3, so n = 33\nM1: Use Sₙ = n/2(first + last)\nA1: S₃₃ = 1650"
            },
            {
                question: "The 3rd term of a geometric sequence is 12 and the 6th term is 96. Find the first term [4 marks]",
                totalMarks: 4,
                markScheme: "M1: u₃ = ar² = 12 and u₆ = ar⁵ = 96\nM1: Divide to get r³ = 8\nM1: r = 2\nA1: a = 3"
            },
            {
                question: "Prove that the sum of the first n odd numbers is n² [4 marks]",
                totalMarks: 4,
                markScheme: "M1: Odd numbers form sequence 1, 3, 5, ..., (2n-1)\nM1: Arithmetic with a = 1, d = 2, last term = 2n-1\nM1: Sₙ = n/2(1 + 2n - 1)\nA1: Sₙ = n²"
            }
        ],
        'Pure Maths: Trigonometry': [
            {
                question: "Convert 120° to radians [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Use π radians = 180°\nA1: 2π/3 radians"
            },
            {
                question: "Solve sin(x) = 0.5 for 0° ≤ x ≤ 360° [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Principal solution x = 30°\nM1: Second solution x = 150°\nA1: x = 30° or 150°"
            },
            {
                question: "A triangle has sides a = 7, b = 8 and angle C = 60°. Find side c using the cosine rule [3 marks]",
                totalMarks: 3,
                markScheme: "M1: c² = a² + b² - 2ab cos C\nM1: c² = 49 + 64 - 56 = 57\nA1: c = √57"
            },
            {
                question: "Find the area of triangle ABC where a = 5cm, b = 8cm and C = 30° [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Area = ½ab sin C\nA1: 10 cm²"
            },
            {
                question: "Show that sin²θ + cos²θ = 1 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Consider right triangle with hypotenuse 1\nM1: By Pythagoras theorem\nA1: sin²θ + cos²θ = 1"
            },
            {
                question: "Solve 2cos(x) = 1 for 0° ≤ x ≤ 360° [3 marks]",
                totalMarks: 3,
                markScheme: "M1: cos(x) = 0.5\nM1: x = 60° or x = 300°\nA1: Both solutions correct"
            },
            {
                question: "Express 3sin(θ) + 4cos(θ) in the form Rsin(θ + α) [4 marks]",
                totalMarks: 4,
                markScheme: "M1: R = √(3² + 4²) = 5\nM1: tan α = 4/3\nM1: α = 53.1°\nA1: 5sin(θ + 53.1°)"
            },
            {
                question: "Find the exact value of sin(45°)cos(30°) + cos(45°)sin(30°) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Use exact values\nM1: (√2/2)(√3/2) + (√2/2)(1/2)\nA1: (√6 + √2)/4"
            },
            {
                question: "Solve tan²(x) = 3 for 0° ≤ x ≤ 360° [4 marks]",
                totalMarks: 4,
                markScheme: "M1: tan(x) = ±√3\nM1: Solutions for tan(x) = √3: 60°, 240°\nM1: Solutions for tan(x) = -√3: 120°, 300°\nA1: x = 60°, 120°, 240°, 300°"
            },
            {
                question: "A circle has radius 10cm. Find the arc length subtended by an angle of π/3 radians [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Arc length = rθ\nA1: 10π/3 cm"
            },
            {
                question: "Find the area of a sector of a circle with radius 6cm and angle π/4 radians [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Area = ½r²θ\nA1: 9π/2 cm²"
            },
            {
                question: "Prove that tan(θ) = sin(θ)/cos(θ) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: In right triangle, tan = opp/adj\nA1: sin/cos = (opp/hyp)/(adj/hyp) = opp/adj = tan"
            }
        ],
        'Pure Maths: Exponentials and Logarithms': [
            {
                question: "Solve 2ˣ = 16 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Rewrite 16 as 2⁴\nA1: x = 4"
            },
            {
                question: "Solve ln(x) = 3 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Take exponential\nA1: x = e³"
            },
            {
                question: "Simplify log₂(8) + log₂(4) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: log₂(8) = 3, log₂(4) = 2\nM1: Or use log₂(8×4) = log₂(32)\nA1: 5"
            },
            {
                question: "Solve 3ˣ⁺¹ = 27 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: 3ˣ⁺¹ = 3³\nA1: x = 2"
            },
            {
                question: "Express log₅(25) - log₅(5) as a single number [2 marks]",
                totalMarks: 2,
                markScheme: "M1: 2 - 1\nA1: 1"
            },
            {
                question: "Solve eˣ = 10, giving your answer to 3 significant figures [2 marks]",
                totalMarks: 2,
                markScheme: "M1: x = ln(10)\nA1: x = 2.30"
            },
            {
                question: "Express 2log(x) - log(y) as a single logarithm [2 marks]",
                totalMarks: 2,
                markScheme: "M1: log(x²) - log(y)\nA1: log(x²/y)"
            },
            {
                question: "Solve log₃(x) + log₃(x-2) = 1 [4 marks]",
                totalMarks: 4,
                markScheme: "M1: log₃[x(x-2)] = 1\nM1: x(x-2) = 3\nM1: x² - 2x - 3 = 0\nA1: x = 3 (reject x = -1)"
            },
            {
                question: "Given that 5ˣ = 20, find the value of x to 2 decimal places [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Take logs: x log(5) = log(20)\nM1: x = log(20)/log(5)\nA1: x = 1.86"
            },
            {
                question: "Simplify e^(2ln3) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: e^(ln3²) = e^(ln9)\nA1: 9"
            },
            {
                question: "Solve 2^(2x+1) = 32 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: 2^(2x+1) = 2⁵\nM1: 2x + 1 = 5\nA1: x = 2"
            },
            {
                question: "Express ln(8) in terms of ln(2) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: ln(8) = ln(2³)\nA1: 3ln(2)"
            }
        ],
        'Pure Maths: Differentiation': [
            {
                question: "Find dy/dx when y = x³ + 4x² - 2x + 5 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: 3x²\nM1: + 8x\nA1: dy/dx = 3x² + 8x - 2"
            },
            {
                question: "Differentiate y = (2x + 1)³ [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Use chain rule: 3(2x + 1)² × 2\nA1: 6(2x + 1)²"
            },
            {
                question: "Find the gradient of y = x² + 3x at x = 2 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: dy/dx = 2x + 3\nA1: At x = 2, gradient = 7"
            },
            {
                question: "Find dy/dx when y = x²sin(x) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Use product rule\nM1: dy/dx = 2x sin(x) + x² cos(x)\nA1: Correct answer"
            },
            {
                question: "The curve y = x³ - 6x² + 9x + 1 has stationary points. Find their x-coordinates [4 marks]",
                totalMarks: 4,
                markScheme: "M1: dy/dx = 3x² - 12x + 9\nM1: Set = 0: 3x² - 12x + 9 = 0\nM1: x² - 4x + 3 = 0\nA1: x = 1 or x = 3"
            },
            {
                question: "Differentiate y = √x + 1/x [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Rewrite as x^(1/2) + x^(-1)\nM1: dy/dx = (1/2)x^(-1/2) - x^(-2)\nA1: 1/(2√x) - 1/x²"
            },
            {
                question: "Find d/dx[(3x² + 1)(x - 2)] [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Use product rule\nM1: (6x)(x-2) + (3x²+1)(1)\nA1: 9x² - 12x + 1"
            },
            {
                question: "Find dy/dx when y = (x+1)/(x-1) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Use quotient rule\nM1: [(x-1)(1) - (x+1)(1)]/(x-1)²\nA1: -2/(x-1)²"
            },
            {
                question: "The curve y = 2x³ - 3x² - 12x + 7 has a stationary point at x = 2. Determine its nature [4 marks]",
                totalMarks: 4,
                markScheme: "M1: dy/dx = 6x² - 6x - 12\nM1: d²y/dx² = 12x - 6\nM1: At x = 2, d²y/dx² = 18 > 0\nA1: Minimum"
            },
            {
                question: "Find the equation of the tangent to y = x² at the point (2, 4) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: dy/dx = 2x, so gradient at x=2 is 4\nM1: Use y - 4 = 4(x - 2)\nA1: y = 4x - 4"
            },
            {
                question: "Differentiate y = e^(3x) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Use chain rule\nA1: dy/dx = 3e^(3x)"
            },
            {
                question: "Find dy/dx when y = ln(2x + 1) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Use chain rule\nA1: dy/dx = 2/(2x+1)"
            }
        ],
        'Pure Maths: Integration': [
            {
                question: "Find ∫(3x² + 2x) dx [2 marks]",
                totalMarks: 2,
                markScheme: "M1: x³ + x²\nA1: x³ + x² + c"
            },
            {
                question: "Evaluate ∫₀² 4x dx [3 marks]",
                totalMarks: 3,
                markScheme: "M1: [2x²]₀²\nM1: 2(4) - 2(0)\nA1: 8"
            },
            {
                question: "Find the area under y = x² between x = 1 and x = 3 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: ∫₁³ x² dx = [x³/3]₁³\nM1: 27/3 - 1/3\nA1: 26/3"
            },
            {
                question: "Find ∫(6x² - 4x + 1) dx [2 marks]",
                totalMarks: 2,
                markScheme: "M1: 2x³ - 2x² + x\nA1: + c"
            },
            {
                question: "Integrate sin(x) with respect to x [1 mark]",
                totalMarks: 1,
                markScheme: "A1: -cos(x) + c"
            },
            {
                question: "Evaluate ∫₀^π cos(x) dx [2 marks]",
                totalMarks: 2,
                markScheme: "M1: [sin(x)]₀^π\nA1: 0"
            },
            {
                question: "Find ∫(2/x) dx [2 marks]",
                totalMarks: 2,
                markScheme: "M1: 2∫(1/x) dx\nA1: 2ln|x| + c"
            },
            {
                question: "Find ∫e^(2x) dx [2 marks]",
                totalMarks: 2,
                markScheme: "M1: (1/2)e^(2x)\nA1: + c"
            },
            {
                question: "The gradient of a curve is given by dy/dx = 6x + 2. The curve passes through (1, 5). Find the equation of the curve [4 marks]",
                totalMarks: 4,
                markScheme: "M1: Integrate: y = 3x² + 2x + c\nM1: Substitute (1, 5)\nM1: 5 = 3 + 2 + c\nA1: y = 3x² + 2x"
            },
            {
                question: "Find ∫₁⁴ √x dx [3 marks]",
                totalMarks: 3,
                markScheme: "M1: ∫x^(1/2) dx = (2/3)x^(3/2)\nM1: [(2/3)x^(3/2)]₁⁴\nA1: 14/3"
            },
            {
                question: "Calculate the area between y = x² and the x-axis from x = 0 to x = 2 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: ∫₀² x² dx\nM1: [x³/3]₀²\nA1: 8/3"
            },
            {
                question: "Find ∫(3x + 1)² dx [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Expand to 9x² + 6x + 1\nM1: Integrate: 3x³ + 3x² + x\nA1: + c"
            }
        ],
        'Pure Maths: Vectors': [
            {
                question: "Given a = 3i + 4j, find |a| [2 marks]",
                totalMarks: 2,
                markScheme: "M1: |a| = √(3² + 4²)\nA1: 5"
            },
            {
                question: "Given a = 2i - j + 3k and b = i + 2j - k, find a + b [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Add components\nA1: 3i + j + 2k"
            },
            {
                question: "Find the scalar product of a = (2, 1, 3) and b = (1, -1, 2) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: a·b = 2(1) + 1(-1) + 3(2)\nA1: 7"
            },
            {
                question: "A line passes through (1, 2, 3) in direction 2i + j - k. Write the vector equation [2 marks]",
                totalMarks: 2,
                markScheme: "M1: r = a + λd\nA1: r = (1,2,3) + λ(2,1,-1)"
            },
            {
                question: "Find a unit vector in the direction of 3i + 4j [3 marks]",
                totalMarks: 3,
                markScheme: "M1: |3i + 4j| = 5\nM1: Divide by magnitude\nA1: (3/5)i + (4/5)j"
            },
            {
                question: "Given vectors a = (2,3) and b = (1,-2), find 2a - 3b [2 marks]",
                totalMarks: 2,
                markScheme: "M1: 2a = (4,6), 3b = (3,-6)\nA1: (1,12)"
            },
            {
                question: "Find the angle between vectors a = (1,0) and b = (1,1) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: cos θ = (a·b)/(|a||b|)\nM1: cos θ = 1/√2\nA1: θ = 45°"
            },
            {
                question: "Points A, B, C have position vectors a = i + 2j, b = 3i + j, c = 2i + 4j. Show that A, B, C form a triangle [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Find AB = 2i - j\nM1: Find AC = i + 2j\nA1: AB ≠ λAC so not collinear, forms triangle"
            },
            {
                question: "The position vectors of points P and Q are 2i + 3j and 5i + 7j. Find |PQ| [3 marks]",
                totalMarks: 3,
                markScheme: "M1: PQ = 3i + 4j\nM1: |PQ| = √(9 + 16)\nA1: 5"
            },
            {
                question: "Given that a = (3, -1, 2) and b = (1, 2, -1), find a·b and state what this tells you about the vectors [3 marks]",
                totalMarks: 3,
                markScheme: "M1: a·b = 3 - 2 - 2\nM1: a·b = -1\nA1: Not perpendicular (would need a·b = 0)"
            }
        ],
        'Statistics: Probability': [
            {
                question: "A bag contains 5 red and 3 blue balls. Two balls are selected without replacement. Find P(both red) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: P(1st red) = 5/8\nM1: P(2nd red|1st red) = 4/7\nA1: 5/14"
            },
            {
                question: "Events A and B are independent with P(A) = 0.3 and P(B) = 0.4. Find P(A ∩ B) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: P(A ∩ B) = P(A) × P(B)\nA1: 0.12"
            },
            {
                question: "P(A) = 0.6, P(B) = 0.5, P(A ∪ B) = 0.8. Find P(A ∩ B) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)\nM1: 0.8 = 1.1 - P(A ∩ B)\nA1: 0.3"
            },
            {
                question: "A fair dice is rolled. Find P(rolling > 4) [1 mark]",
                totalMarks: 1,
                markScheme: "A1: 2/6 = 1/3"
            },
            {
                question: "In a class, 60% study French and 40% study German. 25% study both. Find the probability a student studies neither [3 marks]",
                totalMarks: 3,
                markScheme: "M1: P(F ∪ G) = 0.6 + 0.4 - 0.25\nM1: P(F ∪ G) = 0.75\nA1: P(neither) = 0.25"
            },
            {
                question: "Events A and B are mutually exclusive with P(A) = 0.3 and P(B) = 0.5. Find P(A ∪ B) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: For mutually exclusive, P(A ∪ B) = P(A) + P(B)\nA1: 0.8"
            },
            {
                question: "A fair coin is tossed 3 times. Find the probability of getting exactly 2 heads [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Possible outcomes: HHT, HTH, THH\nM1: P(each) = 1/8\nA1: P(2 heads) = 3/8"
            },
            {
                question: "P(A) = 0.7, P(B) = 0.4, P(A|B) = 0.6. Find P(A ∩ B) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: P(A|B) = P(A ∩ B)/P(B)\nA1: P(A ∩ B) = 0.24"
            },
            {
                question: "Two events A and B are such that P(A) = 0.5, P(B) = 0.6 and P(A ∩ B) = 0.3. Are A and B independent? [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Check if P(A ∩ B) = P(A) × P(B)\nM1: P(A) × P(B) = 0.3\nA1: Yes, independent"
            },
            {
                question: "A card is drawn from a pack. Find P(King or Heart) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: P(King) = 4/52, P(Heart) = 13/52\nM1: P(King ∩ Heart) = 1/52\nA1: P(King ∪ Heart) = 16/52 = 4/13"
            }
        ],
        'Statistics: Statistical Distributions': [
            {
                question: "X ~ B(10, 0.3). State the mean and variance [2 marks]",
                totalMarks: 2,
                markScheme: "B1: Mean = np = 3\nB1: Variance = np(1-p) = 2.1"
            },
            {
                question: "X ~ N(50, 16). Find the standard deviation [1 mark]",
                totalMarks: 1,
                markScheme: "A1: σ = 4"
            },
            {
                question: "For binomial B(20, p), the mean is 8. Find p [2 marks]",
                totalMarks: 2,
                markScheme: "M1: np = 20p = 8\nA1: p = 0.4"
            },
            {
                question: "X ~ B(15, 0.2). Find P(X = 3) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Use P(X=r) = ⁿCᵣpʳ(1-p)ⁿ⁻ʳ\nA1: ¹⁵C₃(0.2)³(0.8)¹² ≈ 0.250"
            },
            {
                question: "X ~ N(100, 25). Find P(X > 110) using Z tables [4 marks]",
                totalMarks: 4,
                markScheme: "M1: Z = (110-100)/5 = 2\nM1: P(Z > 2) = 1 - P(Z < 2)\nM1: From tables P(Z < 2) = 0.9772\nA1: 0.0228"
            },
            {
                question: "A normal distribution has mean 60 and standard deviation 8. Find the value of k such that P(X < k) = 0.9 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: From tables, Z = 1.28 when P(Z<z) = 0.9\nM1: k = μ + zσ\nA1: k = 60 + 1.28(8) = 70.24"
            },
            {
                question: "State two conditions needed for a binomial distribution [2 marks]",
                totalMarks: 2,
                markScheme: "B1: Fixed number of trials\nB1: Constant probability of success / independent trials"
            },
            {
                question: "X ~ B(12, 0.25). Find P(X ≤ 2) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: P(X ≤ 2) = P(X=0) + P(X=1) + P(X=2)\nM1: Calculate each term\nA1: 0.390"
            },
            {
                question: "The heights of students are normally distributed with mean 170cm and standard deviation 10cm. Find P(height > 180cm) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Z = (180-170)/10 = 1\nM1: P(Z > 1) = 1 - 0.8413\nA1: 0.1587"
            },
            {
                question: "X ~ N(μ, σ²). Given P(X < 100) = 0.8 and P(X < 80) = 0.2, find μ [4 marks]",
                totalMarks: 4,
                markScheme: "M1: Z values: 0.84 and -0.84\nM1: 100 = μ + 0.84σ and 80 = μ - 0.84σ\nM1: Add equations: 180 = 2μ\nA1: μ = 90"
            }
        ],
        'Mechanics: Kinematics': [
            {
                question: "A particle moves with constant acceleration 2 m/s². Initial velocity is 3 m/s. Find velocity after 5 seconds [2 marks]",
                totalMarks: 2,
                markScheme: "M1: v = u + at\nA1: v = 13 m/s"
            },
            {
                question: "A car accelerates from rest at 3 m/s² for 4 seconds. Find distance travelled [3 marks]",
                totalMarks: 3,
                markScheme: "M1: s = ut + ½at²\nM1: s = 0 + ½(3)(16)\nA1: s = 24 m"
            },
            {
                question: "A ball is thrown upwards at 20 m/s. Taking g = 10 m/s², find maximum height [3 marks]",
                totalMarks: 3,
                markScheme: "M1: v² = u² + 2as, v = 0 at max height\nM1: 0 = 400 - 20s\nA1: s = 20 m"
            },
            {
                question: "A particle has displacement s = 2t² + 3t. Find velocity when t = 2 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: v = ds/dt = 4t + 3\nA1: v = 11 m/s"
            },
            {
                question: "A train decelerates uniformly from 30 m/s to rest in 60m. Find the deceleration [3 marks]",
                totalMarks: 3,
                markScheme: "M1: v² = u² + 2as\nM1: 0 = 900 + 2a(60)\nA1: a = -7.5 m/s²"
            },
            {
                question: "A particle moves in a straight line such that its velocity at time t is v = 3t² - 2t. Find its acceleration when t = 2 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: a = dv/dt = 6t - 2\nA1: a = 10 m/s²"
            },
            {
                question: "A car travels at 20 m/s for 10s, then accelerates at 2 m/s² for 5s. Find total distance [4 marks]",
                totalMarks: 4,
                markScheme: "M1: First part: s₁ = 20 × 10 = 200m\nM1: Second part: s₂ = 20(5) + ½(2)(25)\nM1: s₂ = 100 + 25 = 125m\nA1: Total = 325m"
            },
            {
                question: "A stone is dropped from rest. How far does it fall in 3 seconds? (g = 10 m/s²) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: s = ½gt²\nA1: s = 45 m"
            },
            {
                question: "A particle has velocity v = 4t - 3. Find the displacement from t = 1 to t = 4 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: s = ∫v dt = 2t² - 3t\nM1: [2t² - 3t]₁⁴ = (32 - 12) - (2 - 3)\nA1: s = 21 m"
            },
            {
                question: "A particle moves with velocity v = 6 - 2t. Find when it comes to rest [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Set v = 0: 6 - 2t = 0\nA1: t = 3 s"
            }
        ],
        'Mechanics: Forces and Newton\'s Laws': [
            {
                question: "A 5kg mass is pulled horizontally by a force of 20N. Find acceleration [2 marks]",
                totalMarks: 2,
                markScheme: "M1: F = ma\nA1: a = 4 m/s²"
            },
            {
                question: "State Newton's Second Law [1 mark]",
                totalMarks: 1,
                markScheme: "A1: F = ma or force is proportional to rate of change of momentum"
            },
            {
                question: "A 10kg box on a surface has μ = 0.3. Taking g = 10 m/s², find friction force [2 marks]",
                totalMarks: 2,
                markScheme: "M1: R = mg = 100N\nA1: F = μR = 30N"
            },
            {
                question: "A 2kg mass on a smooth plane inclined at 30° to the horizontal experiences a force down the plane. Find this force (g = 10 m/s²) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: F = mg sin(30°)\nA1: F = 10N"
            },
            {
                question: "Two masses 3kg and 2kg are connected by a string over a smooth pulley. Find acceleration (g = 10 m/s²) [4 marks]",
                totalMarks: 4,
                markScheme: "M1: For 3kg: 30 - T = 3a\nM1: For 2kg: T - 20 = 2a\nM1: Add equations: 10 = 5a\nA1: a = 2 m/s²"
            },
            {
                question: "A car of mass 800kg accelerates from 10 m/s to 20 m/s. Find the resultant force if this takes 5s [3 marks]",
                totalMarks: 3,
                markScheme: "M1: a = (20-10)/5 = 2 m/s²\nM1: F = ma\nA1: F = 1600N"
            },
            {
                question: "A particle of mass m on a rough horizontal surface is pulled by force P at angle θ to horizontal. The normal reaction is R. Write down an equation for vertical equilibrium [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Resolve vertically\nA1: R + P sin θ = mg"
            },
            {
                question: "State Newton's Third Law [1 mark]",
                totalMarks: 1,
                markScheme: "A1: For every action there is an equal and opposite reaction"
            },
            {
                question: "A lift of mass 500kg accelerates upwards at 2 m/s². Find the tension in the cable (g = 10 m/s²) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: T - mg = ma\nM1: T - 5000 = 1000\nA1: T = 6000N"
            },
            {
                question: "A block of mass 5kg rests on a rough plane inclined at 20° to horizontal. Coefficient of friction is 0.4. Find the frictional force (g = 10 m/s²) [4 marks]",
                totalMarks: 4,
                markScheme: "M1: R = mg cos 20° = 47N\nM1: Max friction = 0.4 × 47 = 18.8N\nM1: Component down slope = mg sin 20° = 17.1N\nA1: F = 17.1N (less than max, so no sliding)"
            }
        ],
        'Pure Maths: Proof': [
            { question: "Prove by exhaustion that n² - n is even for all positive integers n ≤ 4 [3 marks]", totalMarks: 3, markScheme: "M1: Test n=1,2,3,4\nM1: Show each gives even result\nA1: Conclude true for n≤4" },
            { question: "Prove by contradiction that √2 is irrational [4 marks]", totalMarks: 4, markScheme: "M1: Assume √2 = p/q in lowest terms\nM1: Square: 2q² = p²\nM1: Show p,q both even\nA1: Contradiction" },
            { question: "Prove that the sum of two consecutive integers is odd [3 marks]", totalMarks: 3, markScheme: "M1: Let integers be n and n+1\nM1: Sum = 2n+1\nA1: Odd for all n" },
            { question: "Disprove: n² > 2n for all positive integers [2 marks]", totalMarks: 2, markScheme: "M1: Find counterexample\nA1: n=1 gives 1 not > 2" },
            { question: "Prove by induction that 1+2+...+n = n(n+1)/2 [5 marks]", totalMarks: 5, markScheme: "M1: Base case n=1\nM1: Assume for k\nM1: Show for k+1\nM1: Algebra\nA1: Conclude" },
            { question: "Prove n³ - n divisible by 3 for all n ∈ ℤ [4 marks]", totalMarks: 4, markScheme: "M1: Factor n(n-1)(n+1)\nM1: 3 consecutive integers\nM1: One divisible by 3\nA1: Therefore proven" },
            { question: "Prove if n is odd, n² is odd [3 marks]", totalMarks: 3, markScheme: "M1: Let n = 2k+1\nM1: n² = 4k²+4k+1\nA1: = 2(2k²+2k)+1 is odd" },
            { question: "Prove by counterexample n²+n+41 not always prime [2 marks]", totalMarks: 2, markScheme: "M1: Try n=41\nA1: 41²+41+41 = 41×43" },
            { question: "Prove infinitely many primes exist [4 marks]", totalMarks: 4, markScheme: "M1: Assume finite list\nM1: Consider product+1\nM1: Not divisible by any\nA1: Contradiction" },
            { question: "Prove square of even number divisible by 4 [3 marks]", totalMarks: 3, markScheme: "M1: Let n=2k\nM1: n²=4k²\nA1: Divisible by 4" },
            { question: "Prove √3 is irrational [4 marks]", totalMarks: 4, markScheme: "M1: Assume √3=p/q\nM1: 3q²=p²\nM1: Both divisible by 3\nA1: Contradiction" },
            { question: "Use proof by induction to show 2ⁿ > n for n≥1 [5 marks]", totalMarks: 5, markScheme: "M1: Base case\nM1: Assume for k\nM1: Show for k+1\nM1: 2ᵏ⁺¹ > k+1\nA1: Complete" }
        ],
        'Pure Maths: Numerical Methods': [
            { question: "Use iteration xₙ₊₁ = √(2xₙ + 3) with x₀ = 2 to find x₂ [2 marks]", totalMarks: 2, markScheme: "M1: x₁ = √7 ≈ 2.646\nA1: x₂ ≈ 2.879" },
            { question: "Show x³ - x - 1 = 0 has root between 1 and 2 [2 marks]", totalMarks: 2, markScheme: "M1: f(1)=-1, f(2)=5\nA1: Sign change" },
            { question: "Newton-Raphson with x₀=1 for x²-5=0, find x₁ [3 marks]", totalMarks: 3, markScheme: "M1: Formula xₙ₊₁=xₙ-f/f'\nM1: x₁=1-(-4)/2\nA1: x₁=3" },
            { question: "Trapezium rule with 4 strips gives ∫₀² x² dx ≈ 2.75. Over or under? [2 marks]", totalMarks: 2, markScheme: "M1: x² is convex\nA1: Over-estimate" },
            { question: "Trapezium rule, 2 strips, estimate ∫₀¹ eˣ dx [4 marks]", totalMarks: 4, markScheme: "M1: h=0.5\nM1: Formula\nM1: Calculation\nA1: ≈1.754" },
            { question: "Find intersection of y=x² and y=10-x using iteration [3 marks]", totalMarks: 3, markScheme: "M1: x=√(10-x)\nM1: Iterate\nA1: x≈2.7" },
            { question: "Why might Newton-Raphson fail for f(x)=x³ at x₀=0? [2 marks]", totalMarks: 2, markScheme: "M1: f'(0)=0\nA1: Division by zero" },
            { question: "Use 3 iterations of xₙ₊₁=(xₙ+2/xₙ)/2, x₀=1 for √2 [4 marks]", totalMarks: 4, markScheme: "M1: x₁=1.5\nM1: x₂=1.417\nM1: x₃=1.414\nA1: Converging" },
            { question: "Estimate ∫₁² 1/x dx using trapezium rule, 2 strips [3 marks]", totalMarks: 3, markScheme: "M1: h=0.5\nM1: Apply formula\nA1: ≈0.708" },
            { question: "Advantage of more strips in trapezium rule [1 mark]", totalMarks: 1, markScheme: "A1: More accurate" },
            { question: "Show x=cos(x) has solution in [0,π/2] [2 marks]", totalMarks: 2, markScheme: "M1: f(0)=1-0>0, f(π/2)=0-1<0\nA1: Sign change" },
            { question: "Use bisection method once on x³=2 starting with [1,2] [3 marks]", totalMarks: 3, markScheme: "M1: Try x=1.5\nM1: 1.5³=3.375>2\nA1: Root in [1,1.5]" }
        ],
        'Statistics: Data Collection': [
            { question: "Describe one advantage of random sampling [1 mark]", totalMarks: 1, markScheme: "A1: Unbiased/representative/equal chance" },
            { question: "Explain difference between qualitative and quantitative data [2 marks]", totalMarks: 2, markScheme: "M1: Qualitative is descriptive\nA1: Quantitative is numerical" },
            { question: "Give one disadvantage of quota sampling [1 mark]", totalMarks: 1, markScheme: "A1: Can be biased/not random" },
            { question: "A population has 500 males and 300 females. A stratified sample of 80 is needed. How many males? [2 marks]", totalMarks: 2, markScheme: "M1: 500/800 × 80\nA1: 50 males" },
            { question: "State one advantage of systematic sampling [1 mark]", totalMarks: 1, markScheme: "A1: Simple/quick/evenly spread" },
            { question: "Describe opportunity sampling [1 mark]", totalMarks: 1, markScheme: "A1: Sampling people who are convenient/available" },
            { question: "Give one disadvantage of census [1 mark]", totalMarks: 1, markScheme: "A1: Time consuming/expensive/difficult" },
            { question: "Define a sampling frame [1 mark]", totalMarks: 1, markScheme: "A1: List of all members of population" },
            { question: "Population 1200: 400 aged <20, 500 aged 20-40, 300 aged >40. Stratified sample of 60. How many aged 20-40? [2 marks]", totalMarks: 2, markScheme: "M1: 500/1200 × 60\nA1: 25" },
            { question: "Explain cluster sampling [2 marks]", totalMarks: 2, markScheme: "M1: Population divided into clusters\nA1: Randomly select some clusters, sample all within" },
            { question: "State one advantage of stratified sampling [1 mark]", totalMarks: 1, markScheme: "A1: Proportional representation/reduces bias" },
            { question: "Give example of discrete data [1 mark]", totalMarks: 1, markScheme: "A1: Any countable data e.g. number of children" }
        ],
        'Statistics: Data Presentation and Interpretation': [
            { question: "Calculate the mean of: 2, 5, 7, 8, 8 [2 marks]", totalMarks: 2, markScheme: "M1: Sum = 30\nA1: Mean = 6" },
            { question: "Find the median of: 3, 7, 2, 9, 5, 4, 8 [2 marks]", totalMarks: 2, markScheme: "M1: Order: 2,3,4,5,7,8,9\nA1: Median = 5" },
            { question: "Find the mode of: 2, 5, 5, 7, 8, 5, 9 [1 mark]", totalMarks: 1, markScheme: "A1: 5" },
            { question: "Calculate range of: 12, 15, 8, 20, 11 [1 mark]", totalMarks: 1, markScheme: "A1: 20-8 = 12" },
            { question: "Data: 10, 15, 20, 25, 30. Find Q₁ and Q₃ [2 marks]", totalMarks: 2, markScheme: "M1: Q₁=15\nA1: Q₃=25" },
            { question: "Calculate IQR if Q₁=20 and Q₃=35 [1 mark]", totalMarks: 1, markScheme: "A1: 15" },
            { question: "State one advantage of using median over mean [1 mark]", totalMarks: 1, markScheme: "A1: Not affected by outliers" },
            { question: "Calculate variance of: 2, 4, 6 [3 marks]", totalMarks: 3, markScheme: "M1: Mean = 4\nM1: Sum of squared deviations = 8\nA1: Variance = 8/3" },
            { question: "If standard deviation is 5, what is variance? [1 mark]", totalMarks: 1, markScheme: "A1: 25" },
            { question: "Describe what a box plot shows [2 marks]", totalMarks: 2, markScheme: "M1: Shows five-number summary\nA1: Min, Q₁, median, Q₃, max" },
            { question: "State one use of histograms [1 mark]", totalMarks: 1, markScheme: "A1: Display continuous/grouped data frequency" },
            { question: "Why use frequency density in histograms? [1 mark]", totalMarks: 1, markScheme: "A1: Allows for unequal class widths" }
        ],
        'Statistics: Hypothesis Testing': [
            { question: "State null hypothesis H₀ [1 mark]", totalMarks: 1, markScheme: "A1: Assumption of no change/difference/effect" },
            { question: "Explain difference between one and two-tailed tests [2 marks]", totalMarks: 2, markScheme: "M1: One-tailed tests specific direction\nA1: Two-tailed tests any change" },
            { question: "Significance level 5%, what does this mean? [1 mark]", totalMarks: 1, markScheme: "A1: 5% probability of Type I error" },
            { question: "Define Type I error [1 mark]", totalMarks: 1, markScheme: "A1: Rejecting H₀ when true" },
            { question: "Define Type II error [1 mark]", totalMarks: 1, markScheme: "A1: Accepting H₀ when false" },
            { question: "Coin flipped 20 times, 15 heads. Test if biased at 5% level [4 marks]", totalMarks: 4, markScheme: "M1: H₀: p=0.5, H₁: p≠0.5\nM1: X~B(20,0.5)\nM1: P(X≥15) calculation\nA1: Compare with 0.025, conclude" },
            { question: "What is a critical value? [1 mark]", totalMarks: 1, markScheme: "A1: Boundary value for rejection region" },
            { question: "If p-value = 0.03 and α = 0.05, what decision? [2 marks]", totalMarks: 2, markScheme: "M1: p < α\nA1: Reject H₀" },
            { question: "State conditions for binomial hypothesis test [2 marks]", totalMarks: 2, markScheme: "M1: Fixed trials, constant probability\nA1: Independent, two outcomes" },
            { question: "Why might we choose α = 0.01 instead of 0.05? [1 mark]", totalMarks: 1, markScheme: "A1: More stringent test/reduce Type I error" },
            { question: "Explain what 'significant result' means [1 mark]", totalMarks: 1, markScheme: "A1: Evidence to reject H₀" },
            { question: "State critical region for two-tailed test at 5% [1 mark]", totalMarks: 1, markScheme: "A1: Extreme 2.5% at each tail" }
        ],
        'Statistics: Correlation and Regression': [
            { question: "State the range of correlation coefficient r [1 mark]", totalMarks: 1, markScheme: "A1: -1 ≤ r ≤ 1" },
            { question: "What does r = 1 indicate? [1 mark]", totalMarks: 1, markScheme: "A1: Perfect positive linear correlation" },
            { question: "What does r = -0.8 suggest? [1 mark]", totalMarks: 1, markScheme: "A1: Strong negative correlation" },
            { question: "Explain difference between correlation and causation [2 marks]", totalMarks: 2, markScheme: "M1: Correlation shows association\nA1: Causation shows one causes other" },
            { question: "Regression line is y = 2x + 3. Predict y when x = 5 [1 mark]", totalMarks: 1, markScheme: "A1: y = 13" },
            { question: "Explain extrapolation [1 mark]", totalMarks: 1, markScheme: "A1: Predicting outside data range" },
            { question: "Why is extrapolation unreliable? [1 mark]", totalMarks: 1, markScheme: "A1: Relationship may not hold outside range" },
            { question: "State equation of regression line of y on x [1 mark]", totalMarks: 1, markScheme: "A1: y = a + bx (or equivalent)" },
            { question: "Regression line passes through which point? [1 mark]", totalMarks: 1, markScheme: "A1: (x̄, ȳ)" },
            { question: "Give one limitation of correlation coefficient [1 mark]", totalMarks: 1, markScheme: "A1: Only measures linear relationships" },
            { question: "What is interpolation? [1 mark]", totalMarks: 1, markScheme: "A1: Predicting within data range" },
            { question: "If Sₓₓ = 20, Sᵧᵧ = 45, Sₓᵧ = 30, find r [2 marks]", totalMarks: 2, markScheme: "M1: r = Sₓᵧ/√(SₓₓSᵧᵧ)\nA1: r = 1" }
        ],
        'Mechanics: Moments': [
            { question: "2m beam, 10N force at one end perpendicular. Moment about other end? [2 marks]", totalMarks: 2, markScheme: "M1: Moment = F×d\nA1: 20 Nm" },
            { question: "State principle of moments [1 mark]", totalMarks: 1, markScheme: "A1: Clockwise moments = anticlockwise moments" },
            { question: "Beam 4m long, pivot at center. 20N at 1m from pivot, what force at 2m for balance? [3 marks]", totalMarks: 3, markScheme: "M1: 20×1 = F×2\nM1: 20 = 2F\nA1: F = 10N" },
            { question: "What is couple? [1 mark]", totalMarks: 1, markScheme: "A1: Two equal opposite parallel forces" },
            { question: "Two 15N forces 0.4m apart form couple. Find moment [2 marks]", totalMarks: 2, markScheme: "M1: Moment of couple = F×d\nA1: 6 Nm" },
            { question: "Beam in equilibrium. What can you say about forces and moments? [2 marks]", totalMarks: 2, markScheme: "M1: Sum of forces = 0\nA1: Sum of moments = 0" },
            { question: "Ladder 5m long against wall. Weight 200N acts at center. Find moment about base [2 marks]", totalMarks: 2, markScheme: "M1: Perpendicular distance = 2.5m\nA1: 500 Nm (may need angle)" },
            { question: "Beam mass 10kg, 2m long, pivot 0.5m from left. Where should 20kg be placed for balance? (g=10) [4 marks]", totalMarks: 4, markScheme: "M1: Beam weight at center: 100N at 0.5m from pivot\nM1: Moment = 50 Nm\nM1: 200x = 50\nA1: x = 0.25m from pivot" },
            { question: "Define moment of a force [1 mark]", totalMarks: 1, markScheme: "A1: Force × perpendicular distance from pivot" },
            { question: "Uniform rod 80N weight, 3m long, supported at 1m from one end. Find reactions [4 marks]", totalMarks: 4, markScheme: "M1: Take moments about support\nM1: R₁×1 = 80×0.5\nM1: R₁ = 40N\nA1: R₂ = 40N" },
            { question: "What is center of mass? [1 mark]", totalMarks: 1, markScheme: "A1: Point where weight appears to act" },
            { question: "Why take moments about pivot point? [1 mark]", totalMarks: 1, markScheme: "A1: Eliminates unknown reaction force" }
        ],
        'Mechanics: Projectiles': [
            { question: "Particle projected at 20 m/s at 30° to horizontal. Find horizontal component [2 marks]", totalMarks: 2, markScheme: "M1: uₓ = 20cos(30°)\nA1: 17.3 m/s" },
            { question: "Particle projected at 15 m/s at 60°. Find vertical component [2 marks]", totalMarks: 2, markScheme: "M1: uᵧ = 15sin(60°)\nA1: 13.0 m/s" },
            { question: "Projectile: initial velocity 20 m/s at 45°, g=10. Find time to reach maximum height [3 marks]", totalMarks: 3, markScheme: "M1: uᵧ = 20sin(45°) = 14.14\nM1: v = u - gt, at max v=0\nA1: t = 1.41 s" },
            { question: "Particle projected horizontally at 10 m/s from height 20m. Time to hit ground? (g=10) [3 marks]", totalMarks: 3, markScheme: "M1: s = ut + ½gt²\nM1: 20 = 0 + 5t²\nA1: t = 2 s" },
            { question: "Ball kicked at 25 m/s at 30°. Find maximum height (g=10) [4 marks]", totalMarks: 4, markScheme: "M1: uᵧ = 25sin(30°) = 12.5\nM1: v² = u² - 2gs\nM1: 0 = 156.25 - 20s\nA1: s = 7.81 m" },
            { question: "Particle projected at angle α with speed u. What is range on level ground? [2 marks]", totalMarks: 2, markScheme: "M1: Range = u²sin(2α)/g\nA1: Correct formula stated" },
            { question: "For maximum range, what angle should projectile be fired at? [1 mark]", totalMarks: 1, markScheme: "A1: 45°" },
            { question: "Projectile lands at same height launched. Time of flight? [2 marks]", totalMarks: 2, markScheme: "M1: T = 2usin(α)/g\nA1: Correct formula" },
            { question: "Ball thrown horizontally at 8 m/s. After 2s, find vertical distance fallen (g=10) [2 marks]", totalMarks: 2, markScheme: "M1: s = ½gt²\nA1: s = 20 m" },
            { question: "Why is horizontal velocity constant for projectile? [1 mark]", totalMarks: 1, markScheme: "A1: No horizontal forces (neglecting air resistance)" },
            { question: "Particle projected at 30 m/s at 60°. Find horizontal range (g=10) [4 marks]", totalMarks: 4, markScheme: "M1: R = u²sin(2α)/g\nM1: sin(120°) = sin(60°) = √3/2\nM1: R = 900×√3/2÷10\nA1: R = 77.9 m" },
            { question: "State two assumptions made in projectile motion [2 marks]", totalMarks: 2, markScheme: "B1: No air resistance\nB1: Constant g / level ground" }
        ]
        ]
    },
    'edexcel-further-maths': {
        'Further Pure: Complex Numbers': [
            {
                question: "Express (2 + 3i)(1 - 2i) in the form a + bi [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Expand: 2 - 4i + 3i - 6i²\nM1: Use i² = -1\nA1: 8 - i"
            },
            {
                question: "Find |3 + 4i| [2 marks]",
                totalMarks: 2,
                markScheme: "M1: √(3² + 4²)\nA1: 5"
            },
            {
                question: "Find arg(1 + i) in radians [2 marks]",
                totalMarks: 2,
                markScheme: "M1: arctan(1/1)\nA1: π/4"
            },
            {
                question: "Express 2 + 2i in the form re^(iθ) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: r = 2√2\nM1: θ = π/4\nA1: 2√2 e^(iπ/4)"
            },
            {
                question: "Solve z² = -1 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: z² = i²\nA1: z = ±i"
            },
            {
                question: "Find the complex conjugate of 3 - 5i [1 mark]",
                totalMarks: 1,
                markScheme: "A1: 3 + 5i"
            },
            {
                question: "Express (1+i)/(1-i) in the form a + bi [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Multiply by conjugate (1+i)/(1+i)\nM1: (1+2i+i²)/(1-i²)\nA1: i"
            },
            {
                question: "Find all solutions to z³ = 1 [4 marks]",
                totalMarks: 4,
                markScheme: "M1: 1 = e^(i0)\nM1: z = e^(i×0/3), e^(i×2π/3), e^(i×4π/3)\nM1: Convert to a+bi form\nA1: 1, -1/2 + i√3/2, -1/2 - i√3/2"
            },
            {
                question: "Given z = 3 - 4i, find z* and zz* [3 marks]",
                totalMarks: 3,
                markScheme: "M1: z* = 3 + 4i\nM1: zz* = (3-4i)(3+4i)\nA1: zz* = 25"
            },
            {
                question: "Prove de Moivre's theorem for n = 2 [4 marks]",
                totalMarks: 4,
                markScheme: "M1: (cos θ + i sin θ)²\nM1: = cos²θ - sin²θ + 2i cos θ sin θ\nM1: = cos 2θ + i sin 2θ\nA1: Correct conclusion"
            }
        ],
        'Further Pure: Matrices': [
            {
                question: "Find det([[3,2],[1,4]]) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: ad - bc\nA1: 10"
            },
            {
                question: "Find the inverse of [[2,1],[5,3]] [3 marks]",
                totalMarks: 3,
                markScheme: "M1: det = 1\nM1: Swap diagonal, negate off-diagonal\nA1: [[3,-1],[-5,2]]"
            },
            {
                question: "Calculate [[1,2],[3,4]] × [[2],[1]] [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Row×column multiplication\nA1: [[4],[10]]"
            },
            {
                question: "Find 2A where A = [[1,3],[0,-2]] [1 mark]",
                totalMarks: 1,
                markScheme: "A1: [[2,6],[0,-4]]"
            },
            {
                question: "Given A = [[2,1],[4,3]] and B = [[1,0],[0,2]], find AB [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Multiply matrices correctly\nM1: First row: [2,2]\nA1: AB = [[2,2],[4,6]]"
            },
            {
                question: "Find the eigenvalues of [[3,1],[1,3]] [4 marks]",
                totalMarks: 4,
                markScheme: "M1: det(A - λI) = 0\nM1: (3-λ)² - 1 = 0\nM1: λ² - 6λ + 8 = 0\nA1: λ = 2 or λ = 4"
            },
            {
                question: "Show that [[1,0],[0,1]] is the identity matrix [2 marks]",
                totalMarks: 2,
                markScheme: "M1: For any matrix A, IA = A\nA1: Demonstration shown"
            },
            {
                question: "Find the transpose of [[2,3],[1,4],[0,5]] [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Swap rows and columns\nA1: [[2,1,0],[3,4,5]]"
            },
            {
                question: "Solve [[2,1],[4,3]][[x],[y]] = [[5],[11]] [4 marks]",
                totalMarks: 4,
                markScheme: "M1: Find inverse of coefficient matrix\nM1: Multiply by inverse\nM1: Calculate result\nA1: x = 2, y = 1"
            },
            {
                question: "Show that [[1,2],[2,4]] is singular [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Calculate determinant\nA1: det = 0, therefore singular"
            }
        ],
        'Further Pure: Differential Equations': [
            {
                question: "Solve dy/dx = 2y given y = 3 when x = 0 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Separate variables: dy/y = 2dx\nM1: ln|y| = 2x + c\nA1: y = 3e^(2x)"
            },
            {
                question: "Find the general solution to d²y/dx² - 4y = 0 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Auxiliary equation m² - 4 = 0\nM1: m = ±2\nA1: y = Ae^(2x) + Be^(-2x)"
            },
            {
                question: "Solve dy/dx = x/y with y(0) = 1 [4 marks]",
                totalMarks: 4,
                markScheme: "M1: y dy = x dx\nM1: y²/2 = x²/2 + c\nM1: Use initial condition: c = 1/2\nA1: y² = x² + 1"
            },
            {
                question: "Solve dy/dx + 2y = 0 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Separate: dy/y = -2dx\nA1: y = Ae^(-2x)"
            },
            {
                question: "Find the general solution to d²y/dx² + 9y = 0 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: m² + 9 = 0\nM1: m = ±3i\nA1: y = A cos(3x) + B sin(3x)"
            },
            {
                question: "Solve dy/dx = y², y(0) = 1 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: dy/y² = dx, so -1/y = x + c\nM1: Use y(0) = 1: c = -1\nA1: y = 1/(1-x)"
            },
            {
                question: "Find particular solution to d²y/dx² - 3dy/dx + 2y = 0, y(0) = 1, y'(0) = 0 [5 marks]",
                totalMarks: 5,
                markScheme: "M1: m² - 3m + 2 = 0, so m = 1 or 2\nM1: y = Ae^x + Be^(2x)\nM1: Use y(0) = 1: A + B = 1\nM1: y' = Ae^x + 2Be^(2x), so A + 2B = 0\nA1: A = 2, B = -1, y = 2e^x - e^(2x)"
            },
            {
                question: "Solve dx/dt = 3x, x(0) = 5 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: x = Ce^(3t)\nA1: x = 5e^(3t)"
            },
            {
                question: "Find general solution to d²y/dx² + 2dy/dx + y = 0 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: m² + 2m + 1 = 0\nM1: (m+1)² = 0, repeated root m = -1\nA1: y = (A + Bx)e^(-x)"
            },
            {
                question: "Solve dy/dx = e^x with y(0) = 2 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: y = e^x + c\nA1: y = e^x + 1"
            }
        ],
        'Further Stats 1: Discrete Random Variables': [
            {
                question: "X has P(X=1)=0.3, P(X=2)=0.5, P(X=3)=0.2. Find E(X) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: E(X) = Σ xP(X=x)\nM1: = 1(0.3) + 2(0.5) + 3(0.2)\nA1: = 1.9"
            },
            {
                question: "If E(X) = 5 and Var(X) = 4, find E(2X + 3) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: E(2X + 3) = 2E(X) + 3\nA1: = 13"
            },
            {
                question: "If E(X) = 5 and Var(X) = 4, find Var(2X) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Var(2X) = 4Var(X)\nA1: = 16"
            },
            {
                question: "X has probability function P(X=x) = kx for x = 1,2,3. Find k [3 marks]",
                totalMarks: 3,
                markScheme: "M1: ΣP(X=x) = 1\nM1: k + 2k + 3k = 1\nA1: k = 1/6"
            },
            {
                question: "Find E(X²) given E(X) = 3 and Var(X) = 2 [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Var(X) = E(X²) - [E(X)]²\nM1: 2 = E(X²) - 9\nA1: E(X²) = 11"
            },
            {
                question: "X and Y are independent with E(X) = 2, E(Y) = 3. Find E(XY) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: For independent variables E(XY) = E(X)E(Y)\nA1: = 6"
            },
            {
                question: "The cumulative distribution function of X is F(x) = x²/9 for 0 ≤ x ≤ 3. Find P(1 < X < 2) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: P(1 < X < 2) = F(2) - F(1)\nM1: = 4/9 - 1/9\nA1: = 1/3"
            },
            {
                question: "Given E(X) = 4, E(Y) = 6, Var(X) = 2, Var(Y) = 3, find Var(X + Y) assuming independence [3 marks]",
                totalMarks: 3,
                markScheme: "M1: For independent variables Var(X+Y) = Var(X) + Var(Y)\nM1: = 2 + 3\nA1: = 5"
            },
            {
                question: "X has E(X) = 10. Find E(3X - 7) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: E(3X - 7) = 3E(X) - 7\nA1: = 23"
            },
            {
                question: "Find Var(X) given that E(X) = 5 and E(X²) = 30 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Var(X) = E(X²) - [E(X)]²\nA1: = 30 - 25 = 5"
            }
        ],
        'Further Stats 1: Poisson Distribution': [
            {
                question: "Emails arrive at mean 3 per hour (Poisson). Find P(X = 2) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: P(X=r) = (λʳ e^(-λ))/r!\nM1: P(X=2) = (9e^(-3))/2\nA1: ≈ 0.224"
            },
            {
                question: "X ~ Po(4). Find E(X) and Var(X) [2 marks]",
                totalMarks: 2,
                markScheme: "B1: E(X) = 4\nB1: Var(X) = 4"
            },
            {
                question: "Accidents occur at rate 2 per week (Poisson). Find P(no accidents in a week) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: P(X=0) = e^(-2)\nA1: ≈ 0.135"
            },
            {
                question: "X ~ Po(5). Find P(X ≤ 2) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: P(X≤2) = P(0) + P(1) + P(2)\nM1: Calculate each term\nA1: ≈ 0.125"
            },
            {
                question: "Calls arrive at rate 4 per 10 minutes. Find the mean number of calls in 5 minutes [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Rate proportional to time\nA1: λ = 2"
            },
            {
                question: "X ~ Po(λ) and P(X=0) = 0.2. Find λ [3 marks]",
                totalMarks: 3,
                markScheme: "M1: e^(-λ) = 0.2\nM1: -λ = ln(0.2)\nA1: λ ≈ 1.61"
            },
            {
                question: "State two conditions for a Poisson distribution [2 marks]",
                totalMarks: 2,
                markScheme: "B1: Events occur independently\nB1: Events occur at constant average rate"
            },
            {
                question: "X ~ Po(3), Y ~ Po(5), X and Y independent. Find the distribution of X + Y [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Sum of independent Poisson is Poisson\nA1: X + Y ~ Po(8)"
            },
            {
                question: "A Poisson distribution has mean 6. Find P(X > 6) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: P(X > 6) = 1 - P(X ≤ 6)\nA1: Use tables or calculate ≈ 0.394"
            },
            {
                question: "Defects occur at 0.5 per metre (Poisson). Find P(exactly 1 defect in 3 metres) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: λ = 0.5 × 3 = 1.5\nM1: P(X=1) = 1.5e^(-1.5)\nA1: ≈ 0.335"
            }
        ],
        'Further Mechanics 1: Work, Energy and Power': [
            {
                question: "A 5kg mass is lifted 10m vertically (g=10). Find work done [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Work = mgh\nA1: = 500 J"
            },
            {
                question: "A car of mass 1000kg accelerates from 10 m/s to 20 m/s. Find gain in KE [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Initial KE = 50000 J\nM1: Final KE = 200000 J\nA1: Gain = 150000 J"
            },
            {
                question: "Find the kinetic energy of a 2kg mass moving at 5 m/s [2 marks]",
                totalMarks: 2,
                markScheme: "M1: KE = ½mv²\nA1: = 25 J"
            },
            {
                question: "A force of 20N moves an object 5m in the direction of the force. Find work done [2 marks]",
                totalMarks: 2,
                markScheme: "M1: W = Fs\nA1: = 100 J"
            },
            {
                question: "A car engine does 3000J of work in 10s. Find the power [2 marks]",
                totalMarks: 2,
                markScheme: "M1: P = W/t\nA1: = 300 W"
            },
            {
                question: "A particle of mass 3kg falls 20m. Taking g = 10 m/s², find its speed on hitting the ground [3 marks]",
                totalMarks: 3,
                markScheme: "M1: PE = mgh = 600 J\nM1: PE = KE, so ½(3)v² = 600\nA1: v = 20 m/s"
            },
            {
                question: "State the principle of conservation of energy [1 mark]",
                totalMarks: 1,
                markScheme: "A1: Energy cannot be created or destroyed, only transferred"
            },
            {
                question: "A machine lifts a 100kg mass through 5m in 20s (g=10). Find the power [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Work = mgh = 5000 J\nM1: Power = W/t\nA1: = 250 W"
            },
            {
                question: "A 1kg mass is projected upwards at 10 m/s. Find maximum height (g=10) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Initial KE = 50 J\nM1: At max height, KE = 0, PE = 50 = 10h\nA1: h = 5 m"
            },
            {
                question: "Find the GPE of a 2kg mass at height 15m (g=10) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: PE = mgh\nA1: = 300 J"
            }
        ],
        'Further Pure: Polar Coordinates': [
            { question: "Convert Cartesian (1, 1) to polar [2 marks]", totalMarks: 2, markScheme: "M1: r = √2\nA1: θ = π/4" },
            { question: "Convert polar (2, π/3) to Cartesian [2 marks]", totalMarks: 2, markScheme: "M1: x = 2cos(π/3) = 1\nA1: y = 2sin(π/3) = √3" },
            { question: "Convert r = 2 to Cartesian [2 marks]", totalMarks: 2, markScheme: "M1: r² = x² + y²\nA1: x² + y² = 4" },
            { question: "Convert x = 3 to polar [2 marks]", totalMarks: 2, markScheme: "M1: x = rcosθ = 3\nA1: r = 3secθ" },
            { question: "Find area enclosed by r = 2cosθ [3 marks]", totalMarks: 3, markScheme: "M1: A = ½∫r²dθ\nM1: Limits 0 to π\nA1: π/2" },
            { question: "Sketch r = 1 + cosθ [2 marks]", totalMarks: 2, markScheme: "M1: Cardioid shape\nA1: Correct sketch" },
            { question: "Find polar equation of circle center (a,0) radius a [2 marks]", totalMarks: 2, markScheme: "M1: Use geometry\nA1: r = 2acosθ" },
            { question: "Convert r = 4sinθ to Cartesian [3 marks]", totalMarks: 3, markScheme: "M1: Multiply by r: r² = 4rsinθ\nM1: x² + y² = 4y\nA1: x² + (y-2)² = 4" },
            { question: "Find r for point (3,4) [2 marks]", totalMarks: 2, markScheme: "M1: r² = 9 + 16\nA1: r = 5" },
            { question: "Express θ = π/4 in Cartesian form [1 mark]", totalMarks: 1, markScheme: "A1: y = x" }
        ],
        'Further Pure: Hyperbolic Functions': [
            { question: "Show cosh²x - sinh²x = 1 [3 marks]", totalMarks: 3, markScheme: "M1: Expand definitions\nM1: Algebra\nA1: =1" },
            { question: "Solve sinhx = 2 [2 marks]", totalMarks: 2, markScheme: "M1: x = arsinh(2)\nA1: = ln(2+√5)" },
            { question: "Express tanhx in terms of e [2 marks]", totalMarks: 2, markScheme: "M1: (e^x - e^-x)/(e^x + e^-x)\nA1: Correct" },
            { question: "Differentiate coshx [1 mark]", totalMarks: 1, markScheme: "A1: sinhx" },
            { question: "Differentiate sinhx [1 mark]", totalMarks: 1, markScheme: "A1: coshx" },
            { question: "Integrate sinhx [1 mark]", totalMarks: 1, markScheme: "A1: coshx + c" },
            { question: "Solve coshx = 2 [3 marks]", totalMarks: 3, markScheme: "M1: x = ±arcosh(2)\nM1: = ±ln(2+√3)\nA1: Both values" },
            { question: "Show sinh(2x) = 2sinhx coshx [3 marks]", totalMarks: 3, markScheme: "M1: Use definitions\nM1: Expand\nA1: Proven" },
            { question: "Express arcoshx [2 marks]", totalMarks: 2, markScheme: "M1: ln formula\nA1: ln(x + √(x²-1))" },
            { question: "State domain of arsinhx [1 mark]", totalMarks: 1, markScheme: "A1: All real numbers" }
        ],
        'Further Pure: Further Vectors': [
            { question: "Find a × b where a = i+2j+k, b = 2i-j+3k [3 marks]", totalMarks: 3, markScheme: "M1: Use determinant\nM1: Calculate\nA1: 7i-j-5k" },
            { question: "Find scalar triple product a·(b×c) [4 marks]", totalMarks: 4, markScheme: "M1: Find b×c\nM1: Dot with a\nM1: Calculate\nA1: Answer" },
            { question: "Vectors a, b, c coplanar. What does a·(b×c) equal? [1 mark]", totalMarks: 1, markScheme: "A1: 0" },
            { question: "Find vector perpendicular to both (1,0,1) and (2,1,0) [3 marks]", totalMarks: 3, markScheme: "M1: Use cross product\nM1: Calculate\nA1: (-1,2,1)" },
            { question: "Find shortest distance from point to line [4 marks]", totalMarks: 4, markScheme: "M1: Vector from point to line\nM1: Cross product\nM1: Magnitude\nA1: Distance" },
            { question: "Show vectors (1,2,3), (2,4,6) parallel [2 marks]", totalMarks: 2, markScheme: "M1: One is scalar multiple\nA1: (2,4,6) = 2(1,2,3)" },
            { question: "Find angle between vectors using cross product [3 marks]", totalMarks: 3, markScheme: "M1: |a×b| = |a||b|sinθ\nM1: Calculate\nA1: θ" },
            { question: "Find equation of plane through 3 points [4 marks]", totalMarks: 4, markScheme: "M1: Two vectors in plane\nM1: Normal via cross product\nM1: Use r·n=a·n\nA1: Equation" },
            { question: "Find volume of parallelepiped [3 marks]", totalMarks: 3, markScheme: "M1: Use |a·(b×c)|\nM1: Calculate\nA1: Volume" },
            { question: "State geometrical meaning of a×b [1 mark]", totalMarks: 1, markScheme: "A1: Vector perpendicular to both" }
        ],
        'Further Pure: Further Calculus': [
            { question: "Differentiate arctan(x) [1 mark]", totalMarks: 1, markScheme: "A1: 1/(1+x²)" },
            { question: "Integrate 1/(1+x²) [1 mark]", totalMarks: 1, markScheme: "A1: arctan(x) + c" },
            { question: "Find Maclaurin series for e^x up to x² [3 marks]", totalMarks: 3, markScheme: "M1: f(0)=1, f'(0)=1, f''(0)=1\nM1: Series formula\nA1: 1 + x + x²/2" },
            { question: "Evaluate ∫₁^∞ 1/x² dx [3 marks]", totalMarks: 3, markScheme: "M1: [-1/x]₁^∞\nM1: Limit as x→∞\nA1: 1" },
            { question: "Find ∫x ln(x) dx by parts [4 marks]", totalMarks: 4, markScheme: "M1: u=ln(x), dv=x dx\nM1: Apply formula\nM1: Integrate\nA1: x²ln(x)/2 - x²/4 + c" },
            { question: "Differentiate ln(sinx) [2 marks]", totalMarks: 2, markScheme: "M1: Chain rule\nA1: cotx" },
            { question: "Find ∫sin²x dx [3 marks]", totalMarks: 3, markScheme: "M1: Use cos(2x) = 1-2sin²x\nM1: Integrate\nA1: x/2 - sin(2x)/4 + c" },
            { question: "Evaluate ∫₀^(π/2) sinx cosx dx [3 marks]", totalMarks: 3, markScheme: "M1: Use sin(2x) = 2sinx cosx\nM1: Integrate\nA1: 1/2" },
            { question: "Find Maclaurin series for sin(x) up to x³ [4 marks]", totalMarks: 4, markScheme: "M1: Find derivatives\nM1: Evaluate at 0\nM1: Apply formula\nA1: x - x³/6" },
            { question: "Differentiate x^x [3 marks]", totalMarks: 3, markScheme: "M1: Use y = e^(xlnx)\nM1: Differentiate\nA1: x^x(1 + lnx)" }
        ],
        'Further Stats 1: Continuous Random Variables': [
            { question: "X has pdf f(x) = 2x for 0≤x≤1. Find P(0.5<X<1) [2 marks]", totalMarks: 2, markScheme: "M1: ∫₀.₅¹ 2x dx = [x²]\nA1: 0.75" },
            { question: "State condition for valid pdf [1 mark]", totalMarks: 1, markScheme: "A1: ∫f(x)dx = 1 over range" },
            { question: "X has pdf f(x) = kx² for 0≤x≤2. Find k [3 marks]", totalMarks: 3, markScheme: "M1: ∫₀² kx² dx = 1\nM1: k[x³/3]₀² = 1\nA1: k = 3/8" },
            { question: "X continuous uniform on [2,6]. Find E(X) [2 marks]", totalMarks: 2, markScheme: "M1: E(X) = (a+b)/2\nA1: 4" },
            { question: "X~U[0,10]. Find P(X>7) [2 marks]", totalMarks: 2, markScheme: "M1: Uniform, so P = 3/10\nA1: 0.3" },
            { question: "What is cumulative distribution function? [1 mark]", totalMarks: 1, markScheme: "A1: F(x) = P(X≤x)" },
            { question: "X has cdf F(x) = x²/9 for 0≤x≤3. Find pdf [2 marks]", totalMarks: 2, markScheme: "M1: f(x) = dF/dx\nA1: f(x) = 2x/9" },
            { question: "X has pdf f(x) = 3x² for 0≤x≤1. Find E(X) [3 marks]", totalMarks: 3, markScheme: "M1: E(X) = ∫xf(x)dx\nM1: ∫₀¹ 3x³ dx\nA1: 3/4" },
            { question: "Find median if F(x) = x² for 0≤x≤1 [2 marks]", totalMarks: 2, markScheme: "M1: F(m) = 0.5\nA1: m = 1/√2" },
            { question: "X~U[a,b]. State Var(X) [1 mark]", totalMarks: 1, markScheme: "A1: (b-a)²/12" }
        ],
        'Further Stats 1: Chi-squared Tests': [
            { question: "Explain χ² goodness of fit test [2 marks]", totalMarks: 2, markScheme: "M1: Tests if observed fits expected\nA1: Uses χ² = Σ(O-E)²/E" },
            { question: "Degrees of freedom for 5 categories? [1 mark]", totalMarks: 1, markScheme: "A1: 4" },
            { question: "When is χ² test valid? [1 mark]", totalMarks: 1, markScheme: "A1: All expected frequencies ≥ 5" },
            { question: "Calculate χ² for O=10,E=12 [1 mark]", totalMarks: 1, markScheme: "A1: 4/12 = 0.333" },
            { question: "State null hypothesis in χ² test [1 mark]", totalMarks: 1, markScheme: "A1: No association / observed fits expected" },
            { question: "Contingency table 2×3. Find df [2 marks]", totalMarks: 2, markScheme: "M1: (r-1)(c-1)\nA1: 2" },
            { question: "Why pool categories if E<5? [1 mark]", totalMarks: 1, markScheme: "A1: Meet validity condition" },
            { question: "χ²=6.5, critical value 7.8. Conclusion? [2 marks]", totalMarks: 2, markScheme: "M1: χ² < critical\nA1: Do not reject H₀" },
            { question: "What does large χ² value suggest? [1 mark]", totalMarks: 1, markScheme: "A1: Poor fit / reject H₀" },
            { question: "State formula for χ² statistic [1 mark]", totalMarks: 1, markScheme: "A1: Σ(O-E)²/E" }
        ],
        'Further Stats 1: Probability Generating Functions': [
            { question: "X has PGF G(t) = 0.3 + 0.5t + 0.2t². Find P(X=1) [1 mark]", totalMarks: 1, markScheme: "A1: 0.5" },
            { question: "X has PGF (0.4+0.6t)³. Find E(X) [2 marks]", totalMarks: 2, markScheme: "M1: E(X) = G'(1)\nA1: 1.8" },
            { question: "State property: G(1) = ? [1 mark]", totalMarks: 1, markScheme: "A1: 1" },
            { question: "Find PGF of X where P(X=0)=0.2, P(X=1)=0.5, P(X=2)=0.3 [2 marks]", totalMarks: 2, markScheme: "M1: Sum of p_i t^i\nA1: 0.2 + 0.5t + 0.3t²" },
            { question: "X~B(n,p). State PGF [1 mark]", totalMarks: 1, markScheme: "A1: (q + pt)ⁿ where q=1-p" },
            { question: "How to find Var(X) from PGF? [2 marks]", totalMarks: 2, markScheme: "M1: G''(1) + G'(1) - [G'(1)]²\nA1: Correct formula" },
            { question: "X, Y independent with PGFs Gₓ, Gᵧ. Find PGF of X+Y [2 marks]", totalMarks: 2, markScheme: "M1: Product of PGFs\nA1: Gₓ(t)×Gᵧ(t)" },
            { question: "Find E(X²) if G'(1)=2, G''(1)=6 [2 marks]", totalMarks: 2, markScheme: "M1: E(X²) = G''(1) + G'(1)\nA1: 8" },
            { question: "X~Po(λ). State PGF [1 mark]", totalMarks: 1, markScheme: "A1: e^(λ(t-1))" },
            { question: "Why are PGFs useful? [1 mark]", totalMarks: 1, markScheme: "A1: Find moments easily / sum of RVs" }
        ],
        'Further Mechanics 1: Momentum and Impulse': [
            { question: "2kg ball at 5 m/s hits wall, rebounds at 3 m/s. Find impulse [3 marks]", totalMarks: 3, markScheme: "M1: Initial momentum = 10\nM1: Final momentum = -6\nA1: Impulse = -16 Ns" },
            { question: "State principle of conservation of momentum [1 mark]", totalMarks: 1, markScheme: "A1: Total momentum before = total after (no external forces)" },
            { question: "3kg mass at 4 m/s collides with 2kg at rest. After, move together. Find velocity [3 marks]", totalMarks: 3, markScheme: "M1: 12 = 5v\nM1: Conservation\nA1: v = 2.4 m/s" },
            { question: "Define impulse [1 mark]", totalMarks: 1, markScheme: "A1: Change in momentum / F×t" },
            { question: "Force 20N acts for 3s. Find impulse [1 mark]", totalMarks: 1, markScheme: "A1: 60 Ns" },
            { question: "Ball mass 0.5kg changes velocity from 10 to -6 m/s. Find impulse [2 marks]", totalMarks: 2, markScheme: "M1: Δp = m(v-u)\nA1: -8 Ns" },
            { question: "Why is momentum conserved in collisions? [1 mark]", totalMarks: 1, markScheme: "A1: No external forces / Newton's 3rd law" },
            { question: "Particle mass m, velocity v. State momentum [1 mark]", totalMarks: 1, markScheme: "A1: mv" },
            { question: "Units of momentum [1 mark]", totalMarks: 1, markScheme: "A1: kg m/s or Ns" },
            { question: "Graph shows force vs time. How to find impulse? [1 mark]", totalMarks: 1, markScheme: "A1: Area under graph" }
        ],
        'Further Mechanics 1: Elastic Strings and Springs': [
            { question: "Spring natural length 0.5m, stiffness 20 N/m, extended to 0.7m. Find tension [2 marks]", totalMarks: 2, markScheme: "M1: Extension = 0.2m\nA1: T = 4N" },
            { question: "State Hooke's Law [1 mark]", totalMarks: 1, markScheme: "A1: T = kx or T ∝ x" },
            { question: "String length 2m, modulus 40N. Extended 0.5m. Find tension [2 marks]", totalMarks: 2, markScheme: "M1: T = (λx)/l\nA1: T = 10N" },
            { question: "Define modulus of elasticity [1 mark]", totalMarks: 1, markScheme: "A1: Tension for extension equal to natural length" },
            { question: "Elastic energy stored in spring [2 marks]", totalMarks: 2, markScheme: "M1: E = ½kx²\nA1: Or E = (λx²)/(2l)" },
            { question: "Spring k=50, compressed 0.1m. Find EPE [2 marks]", totalMarks: 2, markScheme: "M1: E = ½kx²\nA1: 0.25 J" },
            { question: "Why does Hooke's law have limits? [1 mark]", totalMarks: 1, markScheme: "A1: Elastic limit / permanent deformation" },
            { question: "String natural length l, extended to 1.5l. Express extension [1 mark]", totalMarks: 1, markScheme: "A1: 0.5l" },
            { question: "Particle mass 2kg hangs on spring k=20. Find extension (g=10) [3 marks]", totalMarks: 3, markScheme: "M1: T = mg = 20N\nM1: kx = 20\nA1: x = 1m" },
            { question: "Units of λ (modulus) [1 mark]", totalMarks: 1, markScheme: "A1: N (newtons)" }
        ],
        'Further Mechanics 1: Elastic Collisions': [
            { question: "Two particles, e=0.5. Before: u₁=6, u₂=2. Find speed of separation [2 marks]", totalMarks: 2, markScheme: "M1: e = (v₂-v₁)/(u₁-u₂)\nA1: v₂-v₁ = 2 m/s" },
            { question: "Define coefficient of restitution [1 mark]", totalMarks: 1, markScheme: "A1: Ratio of speed of separation to approach" },
            { question: "What does e=1 mean? [1 mark]", totalMarks: 1, markScheme: "A1: Perfectly elastic collision" },
            { question: "What does e=0 mean? [1 mark]", totalMarks: 1, markScheme: "A1: Perfectly inelastic / particles coalesce" },
            { question: "Ball drops from 2m, bounces to 1.5m. Find e (g=10) [3 marks]", totalMarks: 3, markScheme: "M1: u = √(2gh) before, v after\nM1: e = v/u\nA1: e = √(1.5/2) ≈ 0.866" },
            { question: "State range of e [1 mark]", totalMarks: 1, markScheme: "A1: 0 ≤ e ≤ 1" },
            { question: "Ball speed v hits wall, e=0.6. Find rebound speed [2 marks]", totalMarks: 2, markScheme: "M1: Separation = e × approach\nA1: 0.6v" },
            { question: "Why is KE lost when e<1? [1 mark]", totalMarks: 1, markScheme: "A1: Converted to heat/sound/deformation" },
            { question: "Particle A (2kg, 5 m/s) hits B (3kg, 1 m/s), e=0.5. Find velocities [5 marks]", totalMarks: 5, markScheme: "M1: Momentum: 10+3 = 2v₁+3v₂\nM1: Restitution: v₂-v₁ = 0.5(5-1)\nM1: Solve simultaneously\nM1: v₁ calculation\nA1: v₁=1.4, v₂=3.4 m/s" },
            { question: "Ball e=0.8 dropped from height h. Bounces. Max height reached? [2 marks]", totalMarks: 2, markScheme: "M1: e² = h'/h\nA1: h' = 0.64h" }
        ]

        ]
    },
    'ocr-cs': {
        'Component 1: Data Types': [
            {
                question: "Convert binary 10110101 to hexadecimal [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Split into groups of 4: 1011 0101\nA1: B5"
            },
            {
                question: "Explain difference between ASCII and Unicode [3 marks]",
                totalMarks: 3,
                markScheme: "M1: ASCII uses 7/8 bits\nM1: Unicode uses 16/32 bits\nA1: Unicode can represent more characters"
            },
            {
                question: "Convert denary 156 to binary [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Use repeated division or place values\nA1: 10011100"
            },
            {
                question: "What is two's complement used for? [1 mark]",
                totalMarks: 1,
                markScheme: "A1: Representing negative numbers in binary"
            },
            {
                question: "Convert -5 to 8-bit two's complement [2 marks]",
                totalMarks: 2,
                markScheme: "M1: 5 = 00000101, invert = 11111010, add 1\nA1: 11111011"
            },
            {
                question: "Explain overflow in binary arithmetic [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Result too large for available bits\nA1: Cannot be stored correctly"
            },
            {
                question: "Convert hexadecimal 2F to denary [2 marks]",
                totalMarks: 2,
                markScheme: "M1: 2×16 + 15\nA1: 47"
            },
            {
                question: "State one advantage of hexadecimal over binary [1 mark]",
                totalMarks: 1,
                markScheme: "A1: More compact / easier to read / fewer digits"
            },
            {
                question: "How many different values can be represented with 8 bits? [2 marks]",
                totalMarks: 2,
                markScheme: "M1: 2⁸\nA1: 256"
            },
            {
                question: "Explain the purpose of a check digit [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Detects errors in data entry/transmission\nA1: Calculated from other digits"
            }
        ],
        'Component 1: Boolean Algebra': [
            {
                question: "Simplify A·B + A·B̄ [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Factor A: A(B + B̄)\nM1: B + B̄ = 1\nA1: = A"
            },
            {
                question: "Draw truth table for A NAND B [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Correct inputs\nA1: Outputs: 1,1,1,0"
            },
            {
                question: "State De Morgan's Laws [2 marks]",
                totalMarks: 2,
                markScheme: "B1: NOT(A AND B) = (NOT A) OR (NOT B)\nB1: NOT(A OR B) = (NOT A) AND (NOT B)"
            },
            {
                question: "Simplify A + A·B [2 marks]",
                totalMarks: 2,
                markScheme: "M1: A(1 + B)\nA1: = A"
            },
            {
                question: "Which gate outputs 1 only when inputs differ? [1 mark]",
                totalMarks: 1,
                markScheme: "A1: XOR"
            },
            {
                question: "Simplify (A + B)·(A + B̄) [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Expand to A + AB + AB̄ + B·B̄\nM1: B·B̄ = 0, AB + AB̄ = A\nA1: = A"
            },
            {
                question: "Complete truth table for A XOR B [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Correct inputs\nA1: Outputs: 0,1,1,0"
            },
            {
                question: "Simplify A·(A + B) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: A·A + A·B = A + A·B\nA1: = A"
            },
            {
                question: "Show that A + ĀB = A + B [3 marks]",
                totalMarks: 3,
                markScheme: "M1: A + ĀB = (A + Ā)(A + B)\nM1: A + Ā = 1\nA1: = A + B"
            },
            {
                question: "State the output of NOT(A OR B) when A=1, B=0 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: A OR B = 1\nA1: NOT 1 = 0"
            }
        ],
        'Component 1: Algorithms': [
            {
                question: "Describe how bubble sort works [3 marks]",
                totalMarks: 3,
                markScheme: "M1: Compare adjacent elements\nM1: Swap if wrong order\nA1: Repeat until no swaps"
            },
            {
                question: "What is time complexity of binary search? [1 mark]",
                totalMarks: 1,
                markScheme: "A1: O(log n)"
            },
            {
                question: "Why is binary search more efficient than linear search? [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Eliminates half data each step\nA1: Linear checks each element"
            },
            {
                question: "What structure is needed for binary search? [1 mark]",
                totalMarks: 1,
                markScheme: "A1: Sorted array/list"
            },
            {
                question: "State worst-case time complexity of merge sort [1 mark]",
                totalMarks: 1,
                markScheme: "A1: O(n log n)"
            },
            {
                question: "Explain Big O notation [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Describes algorithm efficiency\nA1: How runtime grows with input size"
            },
            {
                question: "What is the time complexity of linear search? [1 mark]",
                totalMarks: 1,
                markScheme: "A1: O(n)"
            },
            {
                question: "Describe one advantage of merge sort over bubble sort [2 marks]",
                totalMarks: 2,
                markScheme: "M1: More efficient for large datasets\nA1: O(n log n) vs O(n²)"
            },
            {
                question: "Explain the divide and conquer approach [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Break problem into smaller parts\nA1: Solve parts and combine solutions"
            },
            {
                question: "What is the best case time complexity of bubble sort? [2 marks]",
                totalMarks: 2,
                markScheme: "M1: When already sorted\nA1: O(n)"
            }
        ],
        'Component 2: Databases': [
            {
                question: "Write SQL to select all from Students where age > 16 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: SELECT * FROM Students\nA1: WHERE age > 16"
            },
            {
                question: "Explain what a primary key is [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Unique identifier for each record\nA1: Cannot be null"
            },
            {
                question: "What is a foreign key? [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Links to primary key in another table\nA1: Creates relationships"
            },
            {
                question: "State one requirement for 1NF [1 mark]",
                totalMarks: 1,
                markScheme: "A1: No repeating groups / atomic values"
            },
            {
                question: "Write SQL to insert John, aged 17 into Students [2 marks]",
                totalMarks: 2,
                markScheme: "M1: INSERT INTO Students\nA1: VALUES ('John', 17)"
            },
            {
                question: "Explain second normal form (2NF) [2 marks]",
                totalMarks: 2,
                markScheme: "M1: In 1NF and no partial dependencies\nA1: All attributes depend on whole primary key"
            },
            {
                question: "Write SQL to update age to 18 where name = 'John' [2 marks]",
                totalMarks: 2,
                markScheme: "M1: UPDATE Students SET age = 18\nA1: WHERE name = 'John'"
            },
            {
                question: "What does SQL stand for? [1 mark]",
                totalMarks: 1,
                markScheme: "A1: Structured Query Language"
            },
            {
                question: "Write SQL to delete all students aged under 16 [2 marks]",
                totalMarks: 2,
                markScheme: "M1: DELETE FROM Students\nA1: WHERE age < 16"
            },
            {
                question: "Explain entity-relationship diagrams [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Visual representation of database structure\nA1: Shows entities and relationships"
            }
        ],
        'Component 2: Operating Systems',
        'Component 1: Data Structures',
        'Component 1: Software Development',
        'Component 1: Programming Paradigms',
        'Component 2: Computer Architecture',
        'Component 2: Communication and Networking',
        'Component 2: Legal and Ethical Issues',
        'Component 2: Computational Thinking': [
            {
                question: "State two functions of an OS [2 marks]",
                totalMarks: 2,
                markScheme: "B1: Memory management / file management\nB1: Process scheduling / user interface"
            },
            {
                question: "Explain virtual memory [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Uses hard disk as extension of RAM\nA1: Allows larger programs than available RAM"
            },
            {
                question: "Describe purpose of an interrupt [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Signal to stop current task\nA1: Deal with higher priority task"
            },
            {
                question: "What is paging? [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Dividing memory into fixed blocks\nA1: Programs loaded into available pages"
            },
            {
                question: "Explain the role of a scheduler [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Allocates processor time\nA1: To different processes/programs"
            },
            {
                question: "What is a device driver? [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Software that controls hardware device\nA1: Allows OS to communicate with device"
            },
            {
                question: "Describe round-robin scheduling [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Each process given fixed time slice\nA1: Processes take turns in circular order"
            },
            {
                question: "Explain spooling [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Storing output in buffer/queue\nA1: Until device (e.g. printer) is ready"
            },
            {
                question: "State one advantage of multi-tasking [1 mark]",
                totalMarks: 1,
                markScheme: "A1: Better CPU utilization / multiple programs run simultaneously"
            },
            {
                question: "What is the purpose of memory management? [2 marks]",
                totalMarks: 2,
                markScheme: "M1: Allocate memory to processes\nA1: Prevent conflicts / optimize usage"
            }
        ],
        'Component 1: Data Structures': [
            { question: "Describe difference between stack and queue [2 marks]", totalMarks: 2, markScheme: "M1: Stack is LIFO\nA1: Queue is FIFO" },
            { question: "Give one application of a stack [1 mark]", totalMarks: 1, markScheme: "A1: Function calls / undo / expression evaluation / backtracking" },
            { question: "Explain what a hash table is [2 marks]", totalMarks: 2, markScheme: "M1: Maps keys to values\nA1: Using hash function to compute index" },
            { question: "Describe one advantage of linked list over array [1 mark]", totalMarks: 1, markScheme: "A1: Dynamic size / easier insertion/deletion / no wasted space" },
            { question: "What is a binary tree? [2 marks]", totalMarks: 2, markScheme: "M1: Each node has at most two children\nA1: Called left and right child" },
            { question: "Explain pre-order tree traversal [2 marks]", totalMarks: 2, markScheme: "M1: Visit root first\nA1: Then left subtree, then right subtree" },
            { question: "What is a circular queue? [2 marks]", totalMarks: 2, markScheme: "M1: Queue where end wraps to start\nA1: Efficient use of space" },
            { question: "State advantage of binary search tree [1 mark]", totalMarks: 1, markScheme: "A1: Fast search/insertion/deletion (O(log n))" },
            { question: "What is a graph data structure? [2 marks]", totalMarks: 2, markScheme: "M1: Set of nodes/vertices\nA1: Connected by edges" },
            { question: "Explain what a priority queue is [2 marks]", totalMarks: 2, markScheme: "M1: Queue where elements have priority\nA1: Highest priority served first" },
            { question: "Define adjacency matrix [2 marks]", totalMarks: 2, markScheme: "M1: 2D array for graph\nA1: 1 if edge exists, 0 otherwise" },
            { question: "What is purpose of a dictionary/map? [1 mark]", totalMarks: 1, markScheme: "A1: Store key-value pairs for fast lookup" }
        ],
        'Component 1: Software Development': [
            { question: "Describe one advantage of Agile [1 mark]", totalMarks: 1, markScheme: "A1: Flexible / responsive to change / regular feedback / iterative" },
            { question: "Explain difference between white box and black box testing [2 marks]", totalMarks: 2, markScheme: "M1: White box examines code\nA1: Black box only tests inputs/outputs" },
            { question: "Describe one disadvantage of Waterfall model [1 mark]", totalMarks: 1, markScheme: "A1: Inflexible / difficult to go back / late discovery of issues" },
            { question: "What is prototyping? [2 marks]", totalMarks: 2, markScheme: "M1: Creating preliminary version\nA1: To gather feedback before full development" },
            { question: "Define alpha testing [1 mark]", totalMarks: 1, markScheme: "A1: Testing by developers/internal team" },
            { question: "Define beta testing [1 mark]", totalMarks: 1, markScheme: "A1: Testing by external users before release" },
            { question: "What is version control? [2 marks]", totalMarks: 2, markScheme: "M1: System tracking changes to files\nA1: Allows collaboration and rollback" },
            { question: "State one benefit of code reviews [1 mark]", totalMarks: 1, markScheme: "A1: Find bugs / improve quality / knowledge sharing" },
            { question: "What is regression testing? [2 marks]", totalMarks: 2, markScheme: "M1: Re-running tests after changes\nA1: Ensure existing functionality still works" },
            { question: "Explain extreme programming (XP) [2 marks]", totalMarks: 2, markScheme: "M1: Agile methodology\nA1: Pair programming, frequent releases, test-driven" },
            { question: "What is refactoring? [1 mark]", totalMarks: 1, markScheme: "A1: Restructuring code without changing behavior" },
            { question: "Define continuous integration [2 marks]", totalMarks: 2, markScheme: "M1: Frequently merging code changes\nA1: With automated testing" }
        ],
        'Component 1: Programming Paradigms': [
            { question: "Explain encapsulation in OOP [2 marks]", totalMarks: 2, markScheme: "M1: Bundling data and methods in class\nA1: Hiding internal details from outside" },
            { question: "Describe inheritance [2 marks]", totalMarks: 2, markScheme: "M1: Child class inherits from parent\nA1: Promotes code reuse" },
            { question: "What is polymorphism? [2 marks]", totalMarks: 2, markScheme: "M1: Same interface for different types\nA1: Methods can be overridden in subclasses" },
            { question: "Give one advantage of OOP [1 mark]", totalMarks: 1, markScheme: "A1: Code reuse / modularity / easier maintenance / models real-world" },
            { question: "Explain procedural programming [2 marks]", totalMarks: 2, markScheme: "M1: Program as sequence of procedures\nA1: Step-by-step instructions" },
            { question: "What is functional programming? [2 marks]", totalMarks: 2, markScheme: "M1: Based on mathematical functions\nA1: Avoids changing state and mutable data" },
            { question: "Define abstraction in OOP [2 marks]", totalMarks: 2, markScheme: "M1: Hiding complex details\nA1: Showing only essential features" },
            { question: "What is a class? [2 marks]", totalMarks: 2, markScheme: "M1: Template/blueprint for objects\nA1: Defines attributes and methods" },
            { question: "What is an object? [1 mark]", totalMarks: 1, markScheme: "A1: Instance of a class" },
            { question: "Explain method overriding [2 marks]", totalMarks: 2, markScheme: "M1: Subclass provides own implementation\nA1: Of method inherited from parent" },
            { question: "What is constructor? [2 marks]", totalMarks: 2, markScheme: "M1: Special method called when object created\nA1: Initializes object state" },
            { question: "Give example of encapsulation [1 mark]", totalMarks: 1, markScheme: "A1: Private variables with public getters/setters" }
        ],
        'Component 2: Computer Architecture': [
            { question: "State purpose of ALU [1 mark]", totalMarks: 1, markScheme: "A1: Performs arithmetic and logical operations" },
            { question: "Describe fetch-decode-execute cycle [3 marks]", totalMarks: 3, markScheme: "M1: Fetch: instruction from memory using PC\nM1: Decode: by CU\nA1: Execute: carry out instruction" },
            { question: "Explain difference between RAM and ROM [2 marks]", totalMarks: 2, markScheme: "M1: RAM volatile, ROM non-volatile\nA1: RAM read/write, ROM read-only" },
            { question: "Purpose of cache memory? [1 mark]", totalMarks: 1, markScheme: "A1: Store frequently accessed data for faster access" },
            { question: "State one characteristic of Von Neumann [1 mark]", totalMarks: 1, markScheme: "A1: Stored program / shared memory for data and instructions / sequential" },
            { question: "What does CPU stand for? [1 mark]", totalMarks: 1, markScheme: "A1: Central Processing Unit" },
            { question: "Purpose of program counter? [1 mark]", totalMarks: 1, markScheme: "A1: Stores address of next instruction" },
            { question: "What is clock speed? [2 marks]", totalMarks: 2, markScheme: "M1: Number of cycles per second\nA1: Measured in Hz/GHz" },
            { question: "Explain purpose of MAR [2 marks]", totalMarks: 2, markScheme: "M1: Memory Address Register\nA1: Holds address of memory location to access" },
            { question: "What is MDR? [2 marks]", totalMarks: 2, markScheme: "M1: Memory Data Register\nA1: Holds data being transferred to/from memory" },
            { question: "Advantage of multi-core processor [1 mark]", totalMarks: 1, markScheme: "A1: Can run multiple processes simultaneously" },
            { question: "What is pipelining? [2 marks]", totalMarks: 2, markScheme: "M1: Overlapping execution of instructions\nA1: Improves throughput" }
        ],
        'Component 2: Communication and Networking': [
            { question: "Describe purpose of TCP [2 marks]", totalMarks: 2, markScheme: "M1: Ensures reliable transmission\nA1: Breaks data into packets and reassembles" },
            { question: "Explain difference between client-server and P2P [2 marks]", totalMarks: 2, markScheme: "M1: Client-server has central server\nA1: P2P all computers equal status" },
            { question: "What does HTTP stand for? [1 mark]", totalMarks: 1, markScheme: "A1: HyperText Transfer Protocol" },
            { question: "Describe one advantage of star topology [1 mark]", totalMarks: 1, markScheme: "A1: If one connection fails, others unaffected / easy to add devices" },
            { question: "Purpose of subnet mask? [1 mark]", totalMarks: 1, markScheme: "A1: Divides IP into network and host portions" },
            { question: "What is MAC address? [1 mark]", totalMarks: 1, markScheme: "A1: Unique hardware address of network interface" },
            { question: "Explain purpose of DNS [2 marks]", totalMarks: 2, markScheme: "M1: Domain Name System\nA1: Converts domain names to IP addresses" },
            { question: "What is a packet? [2 marks]", totalMarks: 2, markScheme: "M1: Unit of data transmitted over network\nA1: Contains header and payload" },
            { question: "Describe bus topology [2 marks]", totalMarks: 2, markScheme: "M1: All devices on single cable\nA1: Data sent to all devices" },
            { question: "What is bandwidth? [1 mark]", totalMarks: 1, markScheme: "A1: Amount of data transmitted per unit time" },
            { question: "Explain packet switching [2 marks]", totalMarks: 2, markScheme: "M1: Data split into packets\nA1: Each routed independently" },
            { question: "Purpose of router? [1 mark]", totalMarks: 1, markScheme: "A1: Routes packets between networks" }
        ],
        'Component 2: Legal and Ethical Issues': [
            { question: "State one principle of Data Protection Act [1 mark]", totalMarks: 1, markScheme: "A1: Accurate / secure / fair / not kept too long / lawful" },
            { question: "Describe what Computer Misuse Act makes illegal [2 marks]", totalMarks: 2, markScheme: "M1: Unauthorized access to systems\nA1: Creating/distributing malware / unauthorized modification" },
            { question: "Explain difference between open source and proprietary [2 marks]", totalMarks: 2, markScheme: "M1: Open source allows view/modify code\nA1: Proprietary restricts access to code" },
            { question: "What is copyright? [2 marks]", totalMarks: 2, markScheme: "M1: Legal right of creator\nA1: Controls use and distribution of work" },
            { question: "Define software piracy [1 mark]", totalMarks: 1, markScheme: "A1: Unauthorized copying/distribution of software" },
            { question: "What is GDPR? [2 marks]", totalMarks: 2, markScheme: "M1: General Data Protection Regulation\nA1: EU law on data protection and privacy" },
            { question: "Give one ethical issue with AI [1 mark]", totalMarks: 1, markScheme: "A1: Bias / job displacement / privacy / accountability" },
            { question: "What is Creative Commons? [2 marks]", totalMarks: 2, markScheme: "M1: Licensing system\nA1: Allows creators to specify how work can be used" },
            { question: "Define digital divide [2 marks]", totalMarks: 2, markScheme: "M1: Gap between those with/without technology access\nA1: Based on economic, geographic, or social factors" },
            { question: "State one environmental impact of computing [1 mark]", totalMarks: 1, markScheme: "A1: E-waste / energy consumption / resource extraction" },
            { question: "What is whistleblowing? [1 mark]", totalMarks: 1, markScheme: "A1: Exposing illegal/unethical practices" },
            { question: "Explain accessibility in software design [2 marks]", totalMarks: 2, markScheme: "M1: Making software usable by everyone\nA1: Including people with disabilities" }
        ],
        'Component 2: Computational Thinking': [
            { question: "Explain abstraction [2 marks]", totalMarks: 2, markScheme: "M1: Removing unnecessary details\nA1: Focusing on important features only" },
            { question: "Describe decomposition [2 marks]", totalMarks: 2, markScheme: "M1: Breaking down complex problem\nA1: Into smaller manageable parts" },
            { question: "Give example of pattern recognition [1 mark]", totalMarks: 1, markScheme: "A1: Recognizing similar problems / trends / using known solutions" },
            { question: "What is algorithmic thinking? [2 marks]", totalMarks: 2, markScheme: "M1: Creating step-by-step solution\nA1: That can be implemented" },
            { question: "Explain difference between algorithmic and computational thinking [2 marks]", totalMarks: 2, markScheme: "M1: Algorithmic focuses on procedure\nA1: Computational includes abstraction, decomposition, patterns" },
            { question: "Why is decomposition useful? [1 mark]", totalMarks: 1, markScheme: "A1: Makes complex problems manageable" },
            { question: "Give example of abstraction [1 mark]", totalMarks: 1, markScheme: "A1: Using variable names / API / interface hiding implementation" },
            { question: "What is backtracking? [2 marks]", totalMarks: 2, markScheme: "M1: Trying solutions and undoing if wrong\nA1: Systematic trial and error approach" },
            { question: "Explain heuristic approach [2 marks]", totalMarks: 2, markScheme: "M1: Rule of thumb / practical method\nA1: May not be optimal but good enough" },
            { question: "What is divide and conquer? [2 marks]", totalMarks: 2, markScheme: "M1: Break problem into subproblems\nA1: Solve each, combine solutions" },
            { question: "Define greedy algorithm [2 marks]", totalMarks: 2, markScheme: "M1: Makes locally optimal choice at each step\nA1: Hoping to find global optimum" },
            { question: "Explain caching as optimization [2 marks]", totalMarks: 2, markScheme: "M1: Storing results of expensive operations\nA1: Reuse instead of recalculating" }
        ]

        ]
    }


// Additional questions added to expand the question bank

// Adding 5 more to Statistics: Probability
{
    question: "Two fair dice are rolled. Find the probability that the sum is greater than 9 [3 marks]",
    totalMarks: 3,
    markScheme: "M1: List outcomes: (4,6), (5,5), (5,6), (6,4), (6,5), (6,6)
M1: Count = 6 outcomes out of 36 total
A1: P = 6/36 = 1/6"
},
{
    question: "A bag contains 5 red balls and 3 blue balls. Two balls are drawn without replacement. Find P(both red) [3 marks]",
    totalMarks: 3,
    markScheme: "M1: First draw P(red) = 5/8
M1: Second draw P(red) = 4/7
A1: P(both red) = (5/8) × (4/7) = 20/56 = 5/14"
},
{
    question: "Events A and B are independent with P(A) = 0.3 and P(B) = 0.5. Find P(A ∪ B) [3 marks]",
    totalMarks: 3,
    markScheme: "M1: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
M1: P(A ∩ B) = 0.3 × 0.5 = 0.15
A1: P(A ∪ B) = 0.3 + 0.5 - 0.15 = 0.65"
},
{
    question: "A fair coin is tossed 5 times. Find the probability of getting exactly 3 heads [3 marks]",
    totalMarks: 3,
    markScheme: "M1: Use binomial: C(5,3) × (1/2)³ × (1/2)²
M1: C(5,3) = 10
A1: P = 10 × (1/32) = 10/32 = 5/16"
},
{
    question: "In a class, 60% study French and 40% study German. 20% study both. Find P(French only) [2 marks]",
    totalMarks: 2,
    markScheme: "M1: P(French only) = P(French) - P(both)
A1: = 0.6 - 0.2 = 0.4 or 40%"
},

// Adding 5 more to Statistics: Statistical Distributions  
{
    question: "X ~ B(20, 0.3). Find P(X = 5) using the binomial formula [3 marks]",
    totalMarks: 3,
    markScheme: "M1: P(X = 5) = C(20,5) × 0.3⁵ × 0.7¹⁵
M1: C(20,5) = 15504
A1: P(X = 5) ≈ 0.179"
},
{
    question: "The number of goals scored by a team follows X ~ Po(2.5). Find P(X ≤ 1) [3 marks]",
    totalMarks: 3,
    markScheme: "M1: P(X ≤ 1) = P(X = 0) + P(X = 1)
M1: = e^(-2.5) + 2.5e^(-2.5)
A1: = 3.5e^(-2.5) ≈ 0.287"
},
{
    question: "X ~ N(100, 15²). Find P(X > 115) [3 marks]",
    totalMarks: 3,
    markScheme: "M1: Standardize: Z = (115-100)/15 = 1
M1: P(Z > 1) = 1 - Φ(1)
A1: = 1 - 0.8413 = 0.1587"
},
{
    question: "The heights of students are normally distributed with mean 170cm and standard deviation 8cm. Find the height exceeded by 10% of students [4 marks]",
    totalMarks: 4,
    markScheme: "M1: Need P(X > h) = 0.1, so P(X ≤ h) = 0.9
M1: From tables, z = 1.282 when Φ(z) = 0.9
M1: Use h = 170 + 1.282 × 8
A1: h ≈ 180.3 cm"
},
{
    question: "X ~ B(50, 0.4). Use a normal approximation to find P(X ≥ 25) [4 marks]",
    totalMarks: 4,
    markScheme: "M1: Use Y ~ N(np, np(1-p)) where np = 20, np(1-p) = 12
M1: Apply continuity correction: P(X ≥ 25) = P(Y > 24.5)
M1: Z = (24.5 - 20)/√12 = 1.30
A1: P(Z > 1.30) = 1 - 0.9032 = 0.0968"
},

// Adding 5 more to Mechanics: Forces and Newton's Laws
{
    question: "A 5kg mass is pushed across a smooth horizontal surface with a force of 20N. Find its acceleration [2 marks]",
    totalMarks: 2,
    markScheme: "M1: Use F = ma, so 20 = 5a
A1: a = 4 m/s²"
},
{
    question: "A particle of mass 3kg hangs in equilibrium from two strings at angles 30° and 60° to the vertical. Find the tensions [5 marks]",
    totalMarks: 5,
    markScheme: "M1: Resolve horizontally: T₁sin30 = T₂sin60
M1: Resolve vertically: T₁cos30 + T₂cos60 = 3g
M1: From first equation: T₁ = T₂√3
M1: Substitute into second equation
A1: T₁ = 3g/2 ≈ 14.7N, T₂ = √3g ≈ 17.0N"
},
{
    question: "A 10kg box is being pulled along a rough horizontal floor (μ = 0.4) with a horizontal force of 60N. Find the acceleration [4 marks]",
    totalMarks: 4,
    markScheme: "M1: Friction F = μR = 0.4 × 10g = 40N
M1: Resultant force = 60 - 40 = 20N
M1: Use F = ma: 20 = 10a
A1: a = 2 m/s²"
},
{
    question: "A lift of mass 500kg accelerates upwards at 2m/s². Find the tension in the cable [3 marks]",
    totalMarks: 3,
    markScheme: "M1: Forces: T - 500g = 500 × 2
M1: T = 500(g + 2)
A1: T = 5900N"
},
{
    question: "Two masses, 2kg and 3kg, are connected by a light string over a smooth pulley. Find the acceleration of the system [4 marks]",
    totalMarks: 4,
    markScheme: "M1: For 3kg mass: 3g - T = 3a
M1: For 2kg mass: T - 2g = 2a
M1: Add equations: g = 5a
A1: a = g/5 = 2 m/s² (or 1.96 m/s²)"
},

// Adding 5 more to each of the smaller Computer Science topics
// Component 2: Databases
{
    question: "Explain the difference between a primary key and a foreign key in a relational database [4 marks]",
    totalMarks: 4,
    markScheme: "1 mark: Primary key uniquely identifies each record in a table
1 mark: No two records can have the same primary key value
1 mark: Foreign key is a field that links to the primary key in another table
1 mark: Used to create relationships between tables"
},
{
    question: "Write an SQL query to select all customers from London with credit over 1000, ordered by name [3 marks]",
    totalMarks: 3,
    markScheme: "M1: SELECT * FROM Customers
M1: WHERE City = 'London' AND Credit > 1000
A1: ORDER BY Name"
},
{
    question: "Describe two advantages of using a relational database over flat file storage [4 marks]",
    totalMarks: 4,
    markScheme: "1 mark: Reduced data redundancy/no duplication
1 mark: Data integrity through relationships and constraints
1 mark: Easier to maintain and update
1 mark: Better security through access controls
(Award 2 marks each for two valid advantages)"
},
{
    question: "Explain what is meant by normalization and why it is important [4 marks]",
    totalMarks: 4,
    markScheme: "1 mark: Process of organizing data to reduce redundancy
1 mark: Involves dividing large tables into smaller related tables
1 mark: Ensures data integrity
1 mark: Makes database more efficient and easier to maintain"
},
{
    question: "Write SQL to create a table called Students with fields: StudentID (primary key), Name (varchar), Age (integer), Grade (char) [4 marks]",
    totalMarks: 4,
    markScheme: "M1: CREATE TABLE Students (
M1: StudentID INT PRIMARY KEY,
M1: Name VARCHAR(50), Age INT, Grade CHAR(1)
A1: )"
},

// Component 2: Operating Systems
{
    question: "Explain the role of the scheduler in an operating system [3 marks]",
    totalMarks: 3,
    markScheme: "1 mark: Decides which process gets CPU time
1 mark: Uses scheduling algorithms (e.g., round robin, priority)
1 mark: Aims to maximize CPU utilization and minimize waiting time"
},
{
    question: "Describe the difference between paging and segmentation in memory management [4 marks]",
    totalMarks: 4,
    markScheme: "1 mark: Paging divides memory into fixed-size pages
1 mark: Segmentation divides memory into variable-size segments
1 mark: Paging can cause internal fragmentation
1 mark: Segmentation can cause external fragmentation"
},
{
    question: "What is the purpose of virtual memory? Give one advantage and one disadvantage [4 marks]",
    totalMarks: 4,
    markScheme: "1 mark: Allows programs larger than physical RAM to run
1 mark: Uses hard disk to extend available memory
1 mark: Advantage: More programs can run simultaneously
1 mark: Disadvantage: Slower than physical RAM/disk thrashing"
},
{
    question: "Explain what a device driver is and why it is needed [3 marks]",
    totalMarks: 3,
    markScheme: "1 mark: Software that allows OS to communicate with hardware
1 mark: Provides standard interface between hardware and OS
1 mark: Each device type needs its own specific driver"
},
{
    question: "Describe two functions of an operating system's file management system [4 marks]",
    totalMarks: 4,
    markScheme: "1 mark: Controls reading and writing of files to storage
1 mark: Maintains directory structure
1 mark: Manages file permissions and security
1 mark: Allocates disk space efficiently
(Award 2 marks each for two valid functions)"
},

// Further Pure: Complex Numbers (5 more)
{
    question: "Given z = 4 + 3i, find |z| and arg(z) [3 marks]",
    totalMarks: 3,
    markScheme: "M1: |z| = √(4² + 3²) = √25
A1: |z| = 5
A1: arg(z) = arctan(3/4) ≈ 0.644 rad or 36.9°"
},
{
    question: "Express (1 + i)⁴ in the form a + bi [3 marks]",
    totalMarks: 3,
    markScheme: "M1: (1 + i)² = 1 + 2i - 1 = 2i
M1: (2i)² = -4
A1: -4 + 0i or -4"
},
{
    question: "Find the modulus and argument of z = -3 + 4i [3 marks]",
    totalMarks: 3,
    markScheme: "M1: |z| = √(9 + 16) = 5
M1: arg(z) = π - arctan(4/3)
A1: arg(z) ≈ 2.214 rad or 126.9°"
},
{
    question: "Solve z² = 2i, giving your answers in the form a + bi [4 marks]",
    totalMarks: 4,
    markScheme: "M1: Convert 2i to modulus-argument form: |2i| = 2, arg = π/2
M1: z = √2(cos(π/4) + i sin(π/4)) or √2(cos(5π/4) + i sin(5π/4))
A1: z = 1 + i
A1: z = -1 - i"
},
{
    question: "Given w = 2 - 3i, find w* and |w|² [3 marks]",
    totalMarks: 3,
    markScheme: "M1: w* = 2 + 3i (conjugate)
M1: |w|² = 2² + 3²
A1: |w|² = 13"
},

// Further Pure: Matrices (5 more)
{
    question: "Find the determinant of the matrix [[3, 2], [1, 4]] [2 marks]",
    totalMarks: 2,
    markScheme: "M1: det = (3)(4) - (2)(1)
A1: det = 10"
},
{
    question: "Find the inverse of the matrix [[2, 1], [5, 3]] [3 marks]",
    totalMarks: 3,
    markScheme: "M1: det = 6 - 5 = 1
M1: A⁻¹ = (1/det)[[3, -1], [-5, 2]]
A1: [[3, -1], [-5, 2]]"
},
{
    question: "Calculate AB where A = [[1, 2], [3, 4]] and B = [[5, 6], [7, 8]] [3 marks]",
    totalMarks: 3,
    markScheme: "M1: First row: [1×5+2×7, 1×6+2×8] = [19, 22]
M1: Second row: [3×5+4×7, 3×6+4×8] = [43, 50]
A1: AB = [[19, 22], [43, 50]]"
},
{
    question: "Find the eigenvalues of the matrix [[5, 2], [2, 2]] [4 marks]",
    totalMarks: 4,
    markScheme: "M1: det([[5-λ, 2], [2, 2-λ]]) = 0
M1: (5-λ)(2-λ) - 4 = 0
M1: λ² - 7λ + 6 = 0
A1: λ = 6 or λ = 1"
},
{
    question: "Given M = [[2, 0], [0, 3]], find M³ [2 marks]",
    totalMarks: 2,
    markScheme: "M1: For diagonal matrix, M³ = [[2³, 0], [0, 3³]]
A1: M³ = [[8, 0], [0, 27]]"
},
};
