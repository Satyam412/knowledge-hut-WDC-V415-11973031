const allCourses = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHRtbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Learn HTML5",
    description:
      "Eu ex aliqua duis tempor qui fugiat adipisicing est Lorem tempor consequat.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1524666643752-b381eb00effb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3NzM3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Learn CSS3",
    description:
      "Incididunt pariatur tempor ipsum fugiat labore consequat laborum minim in ea veniam quis in.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1605918321371-584f5deab0a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym9vdHN0cmFwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Learn Bootstrap",
    description:
      "Voluptate deserunt anim adipisicing non aliquip elit commodo eu in do.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Learn ReactJS",
    description: "Ex reprehenderit aliqua anim cupidatat nostrud.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1605918321371-584f5deab0a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym9vdHN0cmFwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Learn Bootstrap",
    description:
      "Voluptate deserunt anim adipisicing non aliquip elit commodo eu in do.",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Learn ReactJS",
    description: "Ex reprehenderit aliqua anim cupidatat nostrud.",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1605918321371-584f5deab0a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym9vdHN0cmFwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Learn Bootstrap",
    description:
      "Voluptate deserunt anim adipisicing non aliquip elit commodo eu in do.",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Learn ReactJS",
    description: "Ex reprehenderit aliqua anim cupidatat nostrud.",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1605918321371-584f5deab0a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym9vdHN0cmFwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Learn Bootstrap",
    description:
      "Voluptate deserunt anim adipisicing non aliquip elit commodo eu in do.",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Learn ReactJS",
    description: "Ex reprehenderit aliqua anim cupidatat nostrud.",
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1605918321371-584f5deab0a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym9vdHN0cmFwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Learn Bootstrap",
    description:
      "Voluptate deserunt anim adipisicing non aliquip elit commodo eu in do.",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Learn ReactJS",
    description: "Ex reprehenderit aliqua anim cupidatat nostrud.",
  },
  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1605918321371-584f5deab0a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym9vdHN0cmFwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Learn Bootstrap",
    description:
      "Voluptate deserunt anim adipisicing non aliquip elit commodo eu in do.",
  },
  {
    id: 14,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Learn ReactJS",
    description: "Ex reprehenderit aliqua anim cupidatat nostrud.",
  },
  {
    id: 15,
    image:
      "https://images.unsplash.com/photo-1605918321371-584f5deab0a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym9vdHN0cmFwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Learn Bootstrap",
    description:
      "Voluptate deserunt anim adipisicing non aliquip elit commodo eu in do.",
  },
  {
    id: 16,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Learn ReactJS",
    description: "Ex reprehenderit aliqua anim cupidatat nostrud.",
  },
];

export default allCourses;
