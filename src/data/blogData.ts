export interface BlogPost {
  id: string;
  title: string;
  image: string;
  description: string;
  content: string;
  date: string;
  author: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Handloom: Preserving India\'s Textile Heritage',
    image: 'https://media.istockphoto.com/id/182690327/photo/colorful-fabrics.jpg?s=612x612&w=0&k=20&c=YZWRvbuTptoVHVi6u74NS2YHTydc6Xm7SEO_HEBfuEE=',
    description: 'Exploring the rich tradition of Indian handloom and its significance in modern fashion.',
    content: 'Indian handloom is one of the most vibrant cultural treasures of India. For centuries, skilled artisans have been creating exquisite textiles using traditional techniques passed down through generations. From the intricate Banarasi weaves to the vibrant Patola of Gujarat, each region has its unique style and story. Today, as we move towards sustainable fashion, handloom fabrics are gaining global recognition for their eco-friendly production methods and timeless beauty.',
    date: '2023-11-15',
    author: 'Priya Sharma',
    category: 'Textiles'
  },
  {
    id: '2',
    title: 'The Timeless Beauty of Terracotta Pottery',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Discover the ancient craft of terracotta and its contemporary applications in home decor.',
    content: 'Terracotta, meaning \'baked earth\' in Italian, has been an integral part of Indian culture for over 5000 years. This versatile material has been used to create everything from everyday utensils to intricate temple sculptures. Modern artisans are now blending traditional techniques with contemporary designs to create stunning home decor items. The earthy tones and organic textures of terracotta bring warmth and character to any space.',
    date: '2023-11-10',
    author: 'Rahul Mehta',
    category: 'Pottery'
  },
  {
    id: '3',
    title: 'The Dying Art of Blue Pottery in Jaipur',
    image: 'https://media.istockphoto.com/id/2058185067/photo/men-working-in-a-screen-printing-factory-near-jaipur-india.jpg?s=612x612&w=0&k=20&c=e-bphHNleTVxlcTekkv2O04pU6Iv_eVcsBnaBxxuz1U=',
    description: 'A journey through the history and revival of Jaipur\'s famous blue pottery.',
    content: 'Jaipur Blue Pottery, with its distinctive blue glaze and intricate designs, is a craft that was introduced to India by Persian artisans. Unlike traditional pottery, it\'s made from a unique frit material that includes quartz and glass. The craft was on the verge of extinction until recent revival efforts by local artisans and government initiatives. Today, Jaipur Blue Pottery is celebrated worldwide for its beauty and craftsmanship.',
    date: '2023-11-05',
    author: 'Ananya Patel',
    category: 'Pottery'
  },
  {
    id: '4',
    title: 'Madhubani Painting: From Village Walls to Global Galleries',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'The journey of Madhubani art from rural Bihar to international acclaim.',
    content: 'Originating in the Mithila region of Bihar, Madhubani painting is characterized by its vibrant colors and intricate patterns. Traditionally created by women on the walls of their homes, these paintings depict mythological themes, nature, and daily life. In recent years, Madhubani art has gained global recognition, with artists adapting the traditional style to contemporary themes and mediums. The art form has become a source of empowerment for rural women artists.',
    date: '2023-10-28',
    author: 'Meera Devi',
    category: 'Painting'
  },
  {
    id: '5',
    title: 'The Revival of Kalamkari: India\'s Ancient Art of Storytelling',
    image: 'https://media.istockphoto.com/id/1090016164/photo/handicraft-kettle.jpg?s=612x612&w=0&k=20&c=JErTSJftGwRQ1W6CdYdbLzQxDY92WvgUbiaBLEQGJhw=',
    description: 'Exploring the intricate process and cultural significance of Kalamkari textiles.',
    content: 'Kalamkari, meaning \'pen work\' in Persian, is a 3000-year-old art form that involves hand-painting or block-printing on fabric. The process is incredibly labor-intensive, involving up to 23 steps including dyeing, waxing, and hand-painting. The themes often depict scenes from Hindu epics or Persian influences. Today, Kalamkari artists are innovating with contemporary designs while preserving traditional techniques, making it relevant in modern fashion and home decor.',
    date: '2023-10-20',
    author: 'Vikram Rao',
    category: 'Textiles'
  },
  {
    id: '6',
    title: 'Bamboo Craft: Sustainable Art from the Northeast',
    image: 'https://media.istockphoto.com/id/1441182027/photo/beautiful-hand-crafted-colorful-decorative-items-the-craft-of-each-state-in-india-reflect-the.jpg?s=612x612&w=0&k=20&c=rWUumRx5KS5LXLaIxLD0iJFRbRhULKn5GKu1vsrzTZs=',
    description: 'Discover the eco-friendly world of bamboo crafts from India\'s northeastern states.',
    content: 'The northeastern states of India have a rich tradition of bamboo craft, where this sustainable material is transformed into functional and decorative items. From furniture and home decor to musical instruments and fishing equipment, bamboo is an integral part of the region\'s cultural identity. The craft is not only environmentally sustainable but also provides livelihood opportunities for local communities. Modern designers are now collaborating with traditional artisans to create contemporary bamboo products for global markets.',
    date: '2023-10-15',
    author: 'Arjun Baruah',
    category: 'Craft'
  },
  {
    id: '7',
    title: 'Bamboo Craft: Sustainable Art from the Northeast',
    image: 'https://media.istockphoto.com/id/450845049/photo/indian-shoes.jpg?s=612x612&w=0&k=20&c=OTTz_DS3z3IVG-LDKz2pNLmQiCp69io74ll4hdiV3oY=',
    description: 'Discover the eco-friendly world of bamboo crafts from India\'s northeastern states.',
    content: 'The northeastern states of India have a rich tradition of bamboo craft, where this sustainable material is transformed into functional and decorative items. From furniture and home decor to musical instruments and fishing equipment, bamboo is an integral part of the region\'s cultural identity. The craft is not only environmentally sustainable but also provides livelihood opportunities for local communities. Modern designers are now collaborating with traditional artisans to create contemporary bamboo products for global markets.',
    date: '2023-10-15',
    author: 'Arjun Baruah',
    category: 'Craft'
  },
  {
    id: '8',
    title: 'Bamboo Craft: Sustainable Art from the Northeast',
    image: 'https://media.istockphoto.com/id/1682213453/photo/meenakshi-amman-temple-in-madurai.jpg?s=612x612&w=0&k=20&c=8sD-Oa3KJPJnxleCpZq4KrlUMoE7e9k7QDZzHwlBiQk=',
    description: 'Discover the eco-friendly world of bamboo crafts from India\'s northeastern states.',
    content: 'The northeastern states of India have a rich tradition of bamboo craft, where this sustainable material is transformed into functional and decorative items. From furniture and home decor to musical instruments and fishing equipment, bamboo is an integral part of the region\'s cultural identity. The craft is not only environmentally sustainable but also provides livelihood opportunities for local communities. Modern designers are now collaborating with traditional artisans to create contemporary bamboo products for global markets.',
    date: '2023-10-15',
    author: 'Arjun Baruah',
    category: 'Craft'
  },
  {
    id: '9',
    title: 'Bamboo Craft: Sustainable Art from the Northeast',
    image: 'https://media.istockphoto.com/id/1293013926/photo/beautiful-painted-terracotta-pots-handicrafts-for-sale-india.jpg?s=612x612&w=0&k=20&c=_mDkcTVPVFOQfp99MOX1Af9PRCsqaGHXVExkidibC0A=',
    description: 'Discover the eco-friendly world of bamboo crafts from India\'s northeastern states.',
    content: 'The northeastern states of India have a rich tradition of bamboo craft, where this sustainable material is transformed into functional and decorative items. From furniture and home decor to musical instruments and fishing equipment, bamboo is an integral part of the region\'s cultural identity. The craft is not only environmentally sustainable but also provides livelihood opportunities for local communities. Modern designers are now collaborating with traditional artisans to create contemporary bamboo products for global markets.',
    date: '2023-10-15',
    author: 'Arjun Baruah',
    category: 'Craft'
  }
];
