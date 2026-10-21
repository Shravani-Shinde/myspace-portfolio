// ✏️ EDIT ME — SAMPLE drafts. `date: null` means "not published"; set an ISO date (YYYY-MM-DD) when you publish.
export interface BlogPost {
  id: string; title: string; summary: string; category: 'Reflections' | 'Tutorials' | 'Projects' | 'Learning'
  date: string | null; tags: string[]; content: string[]; hue: number
}

export const blogPosts: BlogPost[] = [
  {
    id: 'journey', title: 'My Journey in Computer Engineering', category: 'Reflections', date: null, hue: 275,
    summary: 'Sample draft: why I chose this field and what I hope to learn.',
    tags: ['Career', 'Student life', 'Computer Engineering'],
    content: [
      'Choosing Computer Engineering was the beginning of a journey that continues to shape the way I think, learn, and solve problems. My interest in technology has grown through academics, programming, and experimenting with projects that turn ideas into working applications.',

      'My diploma studies gave me a foundation in computing and introduced me to the importance of logical thinking. They also taught me that consistent effort matters. Academic concepts become much more meaningful when I can connect them to something practical, whether it is a database, a web application, or a computer network.',

      'Moving into degree-level Computer Engineering at VJTI has introduced me to new challenges. Subjects such as computer networks, machine learning, compiler construction, and parallel computing require more than memorising definitions. They demand an understanding of how things work behind the scenes and why a particular approach makes sense.',

      'One lesson I am learning is that progress is not always linear. Sometimes a topic takes longer than expected, a program refuses to work, or a project requires several attempts before the result is satisfactory. These experiences have taught me to break large problems into smaller steps, ask better questions, and learn from mistakes instead of avoiding them.',

      'Outside academics, I am exploring software development, artificial intelligence, and data structures and algorithms. Building projects helps me connect different concepts and discover the practical decisions involved in developing software. I also want to improve my communication skills and become better at explaining my technical work.',

      'My goal is not simply to learn more technologies or collect certificates. I want to develop a strong foundation, build useful projects, and become an engineer who can approach unfamiliar problems with confidence. This journey is still in progress, and every new challenge is an opportunity to improve.'
    ],
  },
  {
    id: 'dsa', title: 'Learning Data Structures and Algorithms One Step at a Time', category: 'Tutorials', date: null, hue: 240,
    summary: 'A beginner-friendly approach to learning DSA through fundamentals, problem-solving patterns, debugging, and consistent practice.',
    tags: ['DSA','C++','Java','Python','problem-solving'],
    content: [
        'Data Structures and Algorithms, or DSA, is an important part of computer science. It helps us understand how information can be organised and how problems can be solved efficiently. For students preparing for coding interviews and software internships, DSA is also a useful way to strengthen logical thinking.',

      'Getting started can feel overwhelming because there are many topics, from arrays and strings to trees, graphs, recursion, and dynamic programming. Trying to learn everything at once often makes it difficult to understand which concepts matter most. A structured approach makes the process more manageable.',

      'Arrays and strings are good starting points. They introduce basic operations such as traversal, searching, updating elements, and working with indices. Simple exercises can gradually lead to more interesting problems involving two pointers, sliding windows, and prefix sums.',

      'Hash maps and sets are useful when a problem involves counting frequencies, checking whether an element exists, or identifying repeated values. Stacks and queues introduce different ways of managing data, while linked lists help explain how elements can be connected without requiring contiguous memory.',

      'Once the fundamentals become more comfortable, trees and graphs introduce problems involving hierarchical relationships, connectivity, and traversal. Recursion helps express problems in terms of smaller subproblems, while dynamic programming can avoid repeating expensive calculations when subproblems overlap.',

      'A useful practice routine is to understand the concept, solve a simple example, attempt a problem independently, and then analyse the solution. If the solution fails, examine the inputs and trace the code step by step. Debugging is not separate from learning; it is one of the ways we develop a deeper understanding of a problem.',

      'It is also important to understand time and space complexity. Big-O notation helps describe how an algorithm behaves as the input grows. Two solutions may produce the same answer, but one may require substantially less time or memory for large inputs.',

      'Consistency matters more than solving a large number of questions in a single day. Even one carefully understood problem can be valuable if I can explain the approach, identify its complexity, and recognise when the same idea might apply elsewhere.',

      'My approach to DSA is to build confidence through fundamentals rather than memorising solutions. Every problem is an opportunity to practise breaking a task into smaller steps, reasoning clearly, and improving through feedback. These skills are useful not only in interviews but also in everyday software development.',
    ],
  },
  {
    id: 'ai-lessons', title: 'Building an AI Project: Beyond the Model', category: 'Projects', date: null, hue: 300,
    summary: 'Sample draft: data quality, evaluation, and scoping lessons.',
    tags: ['AI', 'machine learning','Computer Vision','projects'],
    content: [
       'Artificial intelligence projects often appear straightforward at first: choose a model, provide data, and obtain a prediction. In practice, building a useful AI application involves many additional decisions. The model is only one part of a larger system that must accept inputs, process information, present results, and handle unexpected situations.',

      'Data quality is one of the first challenges. A dataset may contain inconsistent labels, missing information, duplicate examples, or images with different lighting and backgrounds. If the data does not represent the situations the application will encounter, the model may perform poorly outside controlled experiments.',

      'Choosing an appropriate evaluation method is also essential. Accuracy can be useful, but it does not tell the entire story. Precision, recall, F1-score, and a confusion matrix can provide a clearer picture when the consequences of different mistakes are important. The right metrics depend on the problem being solved.',

      'My interest in computer vision has encouraged me to explore projects such as virtual try-on systems and deepfake video detection. These ideas involve more than running a trained model. They also raise practical questions about image preprocessing, model limitations, backend integration, response times, and how results should be presented to users.',

      'Integration can be particularly challenging. A frontend may be built with React and TypeScript, while the AI processing happens in a Python backend. These components need a reliable communication mechanism, consistent data formats, and meaningful error handling. A model that works in isolation is not necessarily ready to become part of a complete application.',

      'Another important lesson is to start with a manageable scope. Instead of attempting to build a complete production system immediately, it is often better to create a small working version, evaluate its behaviour, and improve it gradually. A simple baseline also provides a reference for judging whether later changes actually help.',

      'Responsible AI development requires attention to privacy, security, bias, and uncertainty. Predictions should not be presented as unquestionable facts, particularly when errors can affect people. Developers should understand the limitations of their models and communicate them honestly.',

      'For me, the most valuable part of building AI projects is learning how different areas of computer engineering come together. Data processing, algorithms, APIs, interface design, and testing all contribute to the final experience. The goal is not just to make a model produce an output, but to build a system that solves a real problem reliably.'
    ],
  },
  {
    id: 'hci', title: 'Why Human-Computer Interaction Matters in Software Design', category: 'Learning', date: null, hue: 255,
    summary: 'A practical look at usability, user expectations, and the design decisions that make software easier to use.',
    tags: ['HCI', 'usability', 'UI/UX', 'software design'],
    content: [
       'A software application can have powerful features and still fail to satisfy its users. Sometimes the problem is not the technology itself but the way people interact with it. Human-Computer Interaction, commonly known as HCI, focuses on understanding these interactions and designing systems that are useful, understandable, and accessible.',

      'One important idea in HCI is that an interface should communicate clearly. Users should be able to understand what is happening, what actions they can take, and whether their actions have succeeded. For example, a form should show validation errors near the relevant fields instead of leaving users wondering why their submission failed.',

      'Consistency is another important principle. If similar buttons behave differently across different pages, users must repeatedly figure out how the application works. Consistent layouts, familiar labels, and predictable interactions reduce this unnecessary effort.',

      'Error prevention is equally valuable. Consider a form that warns users before they permanently delete important information. This small design decision can prevent mistakes and make the application feel more reliable. Good interfaces do not merely display error messages; they help users avoid errors whenever possible.',

      'When reviewing an interface, usability heuristics provide a useful starting point. Nielsen’s usability heuristics include visibility of system status, consistency and standards, error prevention, recognition rather than recall, and helping users recover from errors. These principles can be applied to websites, mobile applications, dashboards, and many other digital products.',

      'However, following design principles does not guarantee that every user will find an application easy to use. Different users have different expectations, abilities, and levels of technical experience. Usability testing can reveal issues that developers and designers may overlook because they already understand the system.',

      'As I continue learning HCI, I am beginning to see interface design as more than choosing colours, fonts, and layouts. It is about understanding people, reducing friction, and making technology work for the people who depend on it.',
    ],
  },
]

export const readingTime = (p: BlogPost) =>
  Math.max(1, Math.round(p.content.join(' ').split(/\s+/).length / 200))
