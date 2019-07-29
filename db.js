const faker = require("faker");
const projects = [
  {
    id: faker.random.uuid(),
    title: "Construction of Borehole",
    image:
      "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564081405/sela/projects/image.png",
    status: {
      description: "Initiated",
      status: "initiated"
    },
    progress: 20,
    description:
      "The people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problem",
    location: "Ikorodu, Lagos",
    budget: 50000,
    startDate: faker.date.recent(20),
    endDate: faker.date.future(1),
    contractors: [
      {
        name: "John Doe",
        image:
          "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564081614/sela/contractors/contractor.svg"
      },
      {
        name: "Flutterwave",
        image:
          "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564317059/sela/contractors/contractor_1.svg"
      }
    ]
  },
  {
    id: faker.random.uuid(),
    title: "Renovation of Classrooms",
    image:
      "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564329545/sela/projects/image_1.png",
    status: {
      description: "Not initiated",
      status: "not-initiated"
    },
    progress: 0,
    description:
      "The people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problem",
    location: "Ikorodu, Lagos",
    budget: 5000,
    startDate: faker.date.recent(20),
    endDate: faker.date.future(1),
    contractors: [
      {
        name: "John Doe",
        image:
          "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564081614/sela/contractors/contractor.svg"
      },
      {
        name: "Flutterwave",
        image:
          "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564317059/sela/contractors/contractor_1.svg"
      }
    ]
  },
  {
    id: faker.random.uuid(),
    title: "Rebuilding the Tema Bridge",
    image:
      "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564329605/sela/projects/image_2.png",
    status: {
      description: "Completed",
      status: "completed"
    },
    progress: 100,
    description:
      "The people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problem",
    location: "Ikorodu, Lagos",
    budget: 70000,
    startDate: faker.date.recent(20),
    endDate: faker.date.future(1),
    contractors: [
      {
        name: "John Doe",
        image:
          "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564081614/sela/contractors/contractor.svg"
      },
      {
        name: "Flutterwave",
        image:
          "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564317059/sela/contractors/contractor_1.svg"
      }
    ]
  },
  {
    id: faker.random.uuid(),
    title: "Repair of Eroded Road",
    image:
      "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564329603/sela/projects/image_3.png",
    status: {
      description: "Defaulted",
      status: "defaulted"
    },
    progress: 2,
    description:
      "The people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problem",
    location: "Ikorodu, Lagos",
    budget: 5000,
    startDate: faker.date.recent(20),
    endDate: faker.date.future(1),
    contractors: [
      {
        name: "John Doe",
        image:
          "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564081614/sela/contractors/contractor.svg"
      },
      {
        name: "Flutterwave",
        image:
          "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564317059/sela/contractors/contractor_1.svg"
      }
    ]
  },
  {
    id: faker.random.uuid(),
    title: "Construction of Health Center",
    image:
      "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564329602/sela/projects/image_4.png",
    status: {
      description: "Not initiated",
      status: "not-initiated"
    },
    progress: 0,
    description:
      "The people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problem",
    location: "Ikorodu, Lagos",
    budget: 55000,
    startDate: faker.date.recent(20),
    endDate: faker.date.future(1),
    contractors: [
      {
        name: "John Doe",
        image:
          "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564081614/sela/contractors/contractor.svg"
      },
      {
        name: "Flutterwave",
        image:
          "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564317059/sela/contractors/contractor_1.svg"
      }
    ]
  },
  {
    id: faker.random.uuid(),
    title: "Construction of Udala Road",
    image:
      "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564329603/sela/projects/image_5.png",
    status: {
      description: "Completed",
      status: "completed"
    },
    progress: 100,
    description:
      "The people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problem",
    location: "Ikorodu, Lagos",
    budget: 15000,
    startDate: faker.date.recent(20),
    endDate: faker.date.future(1),
    contractors: [
      {
        name: "John Doe",
        image:
          "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564081614/sela/contractors/contractor.svg"
      },
      {
        name: "Flutterwave",
        image:
          "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564317059/sela/contractors/contractor_1.svg"
      }
    ]
  },
  {
    id: faker.random.uuid(),
    title: "Construction of Classroom",
    image:
      "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564329603/sela/projects/image_6.png",
    status: {
      description: "Completed",
      status: "completed"
    },
    progress: 100,
    description:
      "The people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problem",
    location: "Ikorodu, Lagos",
    budget: 80000,
    startDate: faker.date.recent(20),
    endDate: faker.date.future(1),
    contractors: [
      {
        name: "John Doe",
        image:
          "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564081614/sela/contractors/contractor.svg"
      },
      {
        name: "Flutterwave",
        image:
          "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564317059/sela/contractors/contractor_1.svg"
      }
    ]
  },
  {
    id: faker.random.uuid(),
    title: "Construction of Burna Bridge",
    image:
      "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564329598/sela/projects/image_7.png",
    status: {
      description: "On track to be completed",
      status: "on-track"
    },
    progress: 80,
    description:
      "The people of Ikorodu have long sought for a solution to the perennial water crisis plaguing the community. Help came when community members took action and decided to solve the problem",
    location: "Ikorodu, Lagos",
    budget: 10000,
    startDate: faker.date.recent(20),
    endDate: faker.date.future(1),
    contractors: [
      {
        name: "John Doe",
        image:
          "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564081614/sela/contractors/contractor.svg"
      },
      {
        name: "Flutterwave",
        image:
          "https://res.cloudinary.com/abolajibisiriyu/image/upload/v1564317059/sela/contractors/contractor_1.svg"
      }
    ]
  }
];

module.exports = { projects };
