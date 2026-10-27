const image = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=85`;
export const plantCategories = [
 {name:"Air Purifying Plants",plants:[
  {id:"p1",name:"Snake Plant",cost:18.99,price:18.99,description:"Upright, architectural leaves and easy care.",image:image("photo-1593482892290-f54927ae2b8b")},
  {id:"p2",name:"Peace Lily",cost:22.50,price:22.50,description:"Elegant leaves and graceful white blooms.",image:image("photo-1593691509543-c55fb32e5cee")},
  {id:"p3",name:"Spider Plant",cost:14.99,price:14.99,description:"A cheerful classic with cascading plantlets.",image:image("photo-1572688484438-313a6e50c333")},
  {id:"p4",name:"Golden Pothos",cost:16.75,price:16.75,description:"Trailing heart-shaped leaves with golden tones.",image:image("photo-1614594975525-e45190c55d0b")},
  {id:"p5",name:"Rubber Plant",cost:28,price:28,description:"Glossy deep-green leaves make a bold statement.",image:image("photo-1501004318641-b39e6451bec6")},
  {id:"p6",name:"Areca Palm",cost:32.99,price:32.99,description:"Feathery fronds bring a tropical feel indoors.",image:image("photo-1597055181300-3e9a1a3b5a7e")}
 ]},
 {name:"Low-Maintenance Plants",plants:[
  {id:"p7",name:"ZZ Plant",cost:24.99,price:24.99,description:"Shiny upright foliage that tolerates lower light.",image:image("photo-1632207691143-643e2e2a9c2f")},
  {id:"p8",name:"Jade Plant",cost:17.50,price:17.50,description:"A compact succulent with rounded leaves.",image:image("photo-1509423350716-97f9360b4e09")},
  {id:"p9",name:"Aloe Vera",cost:13.25,price:13.25,description:"A sculptural succulent for a bright windowsill.",image:image("photo-1501004318641-b39e6451bec6")},
  {id:"p10",name:"Ponytail Palm",cost:29.99,price:29.99,description:"Playful curling leaves with a fountain-like shape.",image:image("photo-1497250681960-ef046c08a56e")},
  {id:"p11",name:"Cast Iron Plant",cost:26.50,price:26.50,description:"Durable broad leaves for a calm green corner.",image:image("photo-1485955900006-10f4d324d411")},
  {id:"p12",name:"Chinese Evergreen",cost:21.99,price:21.99,description:"Decorative patterned foliage with easy-going needs.",image:image("photo-1497250681960-ef046c08a56e")}
 ]},
 {name:"Decorative Foliage Plants",plants:[
  {id:"p13",name:"Monstera Deliciosa",cost:34.99,price:34.99,description:"Iconic split leaves for a tropical look.",image:image("photo-1614594975525-e45190c55d0b")},
  {id:"p14",name:"Calathea Orbifolia",cost:31.50,price:31.50,description:"Rounded leaves with silvery green stripes.",image:image("photo-1509423350716-97f9360b4e09")},
  {id:"p15",name:"Bird of Paradise",cost:49.99,price:49.99,description:"Big paddle-shaped leaves with dramatic presence.",image:image("photo-1597055181300-3e9a1a3b5a7e")},
  {id:"p16",name:"Philodendron Brasil",cost:19.99,price:19.99,description:"Heart-shaped trailing leaves with lime markings.",image:image("photo-1497250681960-ef046c08a56e")},
  {id:"p17",name:"Fiddle Leaf Fig",cost:44,price:44,description:"Sculptural leaves for a statement corner.",image:image("photo-1501004318641-b39e6451bec6")},
  {id:"p18",name:"Prayer Plant",cost:23.75,price:23.75,description:"Colorful patterned leaves that fold at night.",image:image("photo-1485955900006-10f4d324d411")}
 ]}
];

// Flat array retained for the assignment rubric; every plant includes its category.
export const plantsArray = plantCategories.flatMap((category) => category.plants.map((plant) => ({ ...plant, category: category.name })));
