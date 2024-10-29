
class RelativeTime extends HTMLElement {
  constructor() {
      super();
  }
  connectedCallback() {
      this.render();
      setInterval(() => this.render(), 1000);
  }
  static get observedAttributes() {
      return ['time'];
  }
  attributeChangedCallback(name, oldValue, newValue) {
      this.render();
  }
  render() {
      const timeValue = this.getAttribute('time');
      const time = timeValue ? new Date(timeValue).getTime() : Date.now();
      const now = Date.now();
      const diff = now - time;
      const seconds = Math.floor(diff / 1000) || 1;
      const minutes = Math.floor(diff / (1000 * 60));
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const days = Math.floor(hours / 24);
      const months = Math.floor(days / 30);
      const years = Math.floor(months / 12);

      let aux = '...';
      if (years >= 1) {
          aux = `Hace ${years} año${years > 1 ? 's' : ''}`;
      } else if (months >= 1) {
          aux = `Hace ${months} mes${months > 1 ? 'es' : ''}`;
      } else if (days >= 1) {
          aux = `Hace ${days} día${days > 1 ? 's' : ''}`;
      } else if (hours >= 1) {
          aux = `Hace ${hours} hora${hours > 1 ? 's' : ''}`;
      } else if (minutes >= 1) {
          aux = `Hace ${minutes} minuto${minutes > 1 ? 's' : ''}`;
      } else {
          aux = `Hace ${seconds} segundo${seconds > 1 ? 's' : ''}`;
      }
      this.textContent = aux;
  }
}
customElements.define('relative-time', RelativeTime);

  

  const articles = [
    {
   "id": 1,
   "image": "https://ichef.bbci.co.uk/news/1536/cpsprodpb/61f3/live/260aa840-91dc-11ef-89ae-5575c76d98e6.jpg.webp",
   "title": "Why Harris moved from 'joy' to calling Trump 'a fascist'",
   "description": "On Wednesday afternoon, Kamala Harris stood in front of the vice-presidential residence in Washington DC, and delivered a short but withering attack on her Republican presidential opponent.\n\nCalling Donald Trump \"increasingly unhinged and unstable\", she cited critical comments made by John Kelly, Trump’s former White House Chief of Staff, in a New York Times interview.\n\nThe vice-president quoted Kelly describing Trump as someone who \"certainly falls into the general definition of fascists\" and who had spoken approvingly of Hitler several times.\n\nShe said her rival wanted \"unchecked power\" and later, during a CNN town hall event, was asked point-blank if she believed he was a \"fascist\". \"Yes, I do,\" she replied.\n\nShortly after the town hall finished, Trump posted on X and Truth Social that Harris's comments were a sign that she was losing. He said she was \"increasingly raising her rhetoric, going so far as to call me Adolf Hitler, and anything else that comes to her warped mind\".\n\nIn the home stretch of political campaigns - particularly one as tight and hard-fought as the 2024 presidential race - there is a natural tendency for candidates to turn negative. Attacks tend to be more effective in motivating supporters to head to the polls and disrupting the opposing campaigns.\n\nFor Harris, however, the heavier hand toward Trump stands in contrast to the more optimistic, \"joyful\" messaging of the early days of her campaign.\nWhile she did warn at the Democratic convention of a Trump presidency without the guardrails, Harris largely stepped back from President Joe Biden’s core campaign message that Trump posed an existential threat to American democracy.\nAccording to political strategist Matt Bennett of the centrist Democratic group Third Way, however, it is clear why Harris was quick this time to amplify Kelly’s dark portrait of Trump as a man with authoritarian tendencies.",
   "date": "2024-10-23T10:20:00Z",
   "category": "Climate"
 }
 ,
     {
       "id": 2,
       "image": "https://ichef.bbci.co.uk/ace/standard/1536/cpsprodpb/faed/live/dfdb4a30-920f-11ef-b3c2-754b6219680e.png.webp",
       "title": " Harris makes star-studded final push as Trump heads to key swing states",
       "description": "Kamala Harris is unlikely to meet with Sir Keir Starmer ahead of election day in the US, Downing Street says. Starmer met with Donald Trump when he was in New York in September, when the UK prime minister was in the country for the UN General Assembly.At the time, Starmer said it would be 'very good' to meet both presidential candidates before Americans go to the polls on 5 November.But with Starmer currently in Samoa for a Commonwealth summit, and election day only 12 days away in the US, it's been accepted that time is running out for that meeting to happen, No 10 says",
       "date": "2024-10-22T10:20:00Z",
       "category": "Business"
     },
     {
       "id": 3,
       "image": "https://ichef.bbci.co.uk/images/ic/1024xn/p0jx0x4j.jpg.webp",
       "title": "The far-flung 'Hawaii of Europe'",
       "description": "However, this autonomous island chain off the north-west coast of North Africa has a culture and history all its own that is leading more and more travellers to explore its far-flung shores. Rajan Datar, from BBC's The Travel Show recently journeyed to the archipelago to explore its unique ecosystem and look at the ways the area is tackling its increase in tourism. Settled by the Portuguese in 1425, the island quickly became a hotspot for sugar production and local arts, including the bordado Madeira, a unique style of embroidery that has been passed down on these islands for generations. However, most people around the world know the name Madeira because of its famous fortified wine. What makes Madeiran wine so unique is its ability to age almost indefinitely, which contributes to its complex flavour. Winemakers heat the wine to a temperature of 45C to 50C for around three months and then let it gradually cool before beginning the ageing process. The type of grape used also greatly affects the wine's flavour, which can range from a dry, tangy Sercial to a dark raisin- or caramel-flavoured Bual.",
       "date": "2024-10-23T10:20:00Z",
       "category": "Automobile"
     },
     {
       "id": 4,
       "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/3f60/live/fd1fec40-91c4-11ef-92e1-13c962801f07.jpg.webp",
       "title": "Commonwealth leaders to defy UK on slavery reparations",
       "description": "Commonwealth heads of government are preparing to defy the United Kingdom and agree plans to examine reparatory justice for the transatlantic slave trade, the BBC has learned. Downing Street insists the issue is not on the agenda for the summit of 56 Commonwealth countries, which begins in the Pacific island nation of Samoa on Friday. But diplomatic sources said officials were negotiating an agreement to conduct further research and begin a “meaningful conversation” about an issue which could potentially leave the UK owing billions of pounds in reparations. Frederick Mitchell, foreign minister of the Bahamas, told BBC Radio 4's Today programme: “Once you broach the subject it may take a while for people to come around but come around they will. Reparatory justice for slavery can come in many forms, including financial reparations, debt relief, an official apology, educational programmes, building museums, economic support, and public health assistance." ,
       "date": "2024-10-20T10:20:00Z",
       "category": "Automobile"
     },
     {
       "id": 5,
       "image": "https://ichef.bbci.co.uk/news/640/cpsprodpb/3e81/live/e174ad80-91d0-11ef-8581-cd31a4127fee.jpg.webp",
       "title": "India evacuating more than a million people as Cyclone Dana nears",
       "description": "Authorities in India are evacuating nearly 1.5 million people from the path of an approaching cyclone in the eastern states of Odisha (formerly Orissa) and West Bengal. Thousands of relief workers have been deployed to minimise damage from Cyclone Dana, which is expected to make landfall in the next 24 hours. Transportation services have already been affected, with scores of trains and flights cancelled. India's weather department has said a depression over the Bay of Bengal is expected to turn into a severe cyclonic storm by Thursday evening.",
       "date": "2024-10-19T10:20:00Z",
       "category": "Technology"
     },
     {
       "id": 6,
       "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/ee68/live/c0811de0-6942-11ef-a2c8-e7f3cb9fc0ea.jpg.webp",
       "title": "The journey that helped save Nigeria's art for the nation",
       "description": "The Nigerian National Museum in Lagos sits in the city like a respected but unloved relative - it somehow exudes importance but remains largely unvisited. This is perhaps because the concept of a museum is based on a colonial idea – stuffing cabinets full of exoticised objects removed from the context that gave them any meaning. Olugbile Holloway, who was appointed earlier this year to head the commission that runs the National Museum, is keen to change this - he wants to take the artefacts on the road and get them seen back where they once belonged. “How organically African [is this concept of a museum] or has this ideology kind of been superimposed on us?” he asked me. “Maybe the conventional model of a nice building with artefacts and lights and write-ups, maybe that isn’t what’s going to work in this part of the world?” Established in 1957 – three years before independence - the museum houses objects from across the country, including Ife bronze and terracotta heads, Benin brass plaques and ivories, and Ibibio masks and costumes. But there is also an irony – Mr Holloway's job would not exist if the antiquities department, set up by the colonial government, had not got people to go around the country to collect the pieces that ended up in the museum. Some may have otherwise been stolen by Western visitors with less scruples to be sold on the lucrative European and American artefacts market. While others could have been destroyed by zealous Nigerian Christians convinced that they were the devil’s work.",
       "date": "2024-10-19T10:20:00Z",
       "category": "Technology"
     },
     {
       "id": 7,
       "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/3fff/live/1afae700-91df-11ef-be2c-57f0307db088.jpg.webp",
       "title": "More than 20 dead in Philippine tropical storm",
       "description": "A tropical storm has dumped one month's worth of rains over large swathes of the northern Philippines, leaving more than 20 people dead and forcing 150,000 others to evacuate. Trami made landfall Thursday on the northeast coast of Luzon, the country's most populous island, and caused widespread flooding and landslides. The Bicol peninsula was worst-hit, where floodwaters chased people and their pets to the second storey of their homes. Typhoons are common in the Philippines at this time of the year, but Trami's rains were unusually heavy, the state weather bureau told BBC News. People trapped on their roofs posted photos of their ordeal on social media to appeal for rescue, prompting the coast guard to deploy rubber boats.",
       "date": "2024-10-23T10:20:00Z",
       "category": "Technology"
     },
     {
       "id": 8,
       "image": "https://ichef.bbci.co.uk/news/1536/cpsprodpb/e970/live/8d83cdb0-9512-11ef-8e6d-e3e64e16c628.jpg.webp",
       "title": "Backlash after Trump rally speaker calls Puerto Rico 'island of garbage'",
       "description": "A comedian at a Donald Trump rally has called Puerto Rico a 'floating island of garbage', sparking furious reactions from fellow Republicans as well as Democrats. The comedian, Tony Hinchcliffe, was among the stars who turned out for the event at Madison Square Garden in New York. He also made a series of jokes that leant on racist stereotypes. A Trump adviser distanced the Republican from the Puerto Rico joke, which was also denounced by Trump's Democratic rival, Kamala Harris. Harris herself was the target of another Trump warm-up speaker who also sparked controversy. The furore came as one of the world's top Latin celebrities, Puerto Rican rapper Bad Bunny, endorsed Harris for president. In his joke, Mr Hinchcliffe, who goes by the name Kill Tony, said: 'There’s a lot going on. I don’t know if you know this but there’s literally a floating island of garbage in the middle of the ocean right now. I think it’s called Puerto Rico.' Two Republicans in the state of Florida, which has a prominent Puerto Rican population, were among those who called out the joke - joining Democrats.  Writing on X, US congresswoman Maria Elvira Salazar said she was 'disgusted' by the 'racist comment'. She said it did not 'reflect the GOP values', referring to the Republican Party, and noted the thousands of Puerto Ricans who served in the military.",
       "date": "2024-10-23T10:20:00Z",
       "category": "Technology"
     },
     {
       "id": 9,
       "image": "https://ichef.bbci.co.uk/images/ic/1920x1080/p0k06gpd.jpg.webp",
       "title": "How smartwatches are saving lives",
       "description": "As the chief anaesthesiologist at CHUV University Hospital, Patrick Schoettker is all too aware of the complications which can follow a lengthy operation under general anaesthetic. Rapid blood loss from the surgical site can send the patient into shock, triggering sudden and dangerous dips in blood flow through the body. But patients can also develop severe lung problems after many hours of deep sedation, a complication which accounts for a quarter of all deaths within the first six days of surgery. Such tragedies sometimes occur due to underlying frailties in the patient's physiology which had gone undetected. But what if hospitals had a quick, low-cost way of screening for them ahead of major procedures? Schoettker and his colleagues are conducting a trial which involves fitting patients with a smartwatch known as the Masimo W1 several weeks ahead of their pre-operation consultation. The data it has collected is then used to form an assessment of their state of health. The W1 provides continuous readings of heart rate, respiration rate, blood oxygen, pulse rate and even hydration levels, all to medical-grade accuracy. Schoettker describes the layers of information as being akin to a 'digital twin', and believes it could help save lives. ' We plan to use this pre-operatively acquired data to predict possible pre or postoperative complications and act on them in a preventative way,' says Schoettker. This is just one example of how the booming smartwatch market – some analysts have predicted that more than 400 million devices will be sold worldwide by 2027 – is opening up a bold new era of preventative health. Masimo, Apple, Samsung, Withings, FitBit and Polar have all developed watches capable of recording an extraordinary amount of data, allowing measurements such as sleep quality, blood pressure, heart rhythm variation and blood oxygen saturation levels – a marker of how well the heart and lungs are functioning – to be tracked in real-time.",
       "date": "2024-10-23T10:20:00Z",
       "category": "Technology"
     },
     {
     "id": 10,
     "image": "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/87e9/live/3fb16230-94f6-11ef-97c2-c9d3e1071e66.jpg.webp",
     "title": "Curry injured in Warriors' defeat against Clippers",
     "description": "In a tense game against the Clippers, Stephen Curry faced an unexpected injury during the second quarter, leaving fans and teammates concerned. The Warriors' medical team later reported a mild strain, but the extent of Curry's recovery timeline remains uncertain. Despite his absence, the Clippers secured a win, capitalizing on the Warriors’ lack of offensive power.",
     "date": "2024-10-20T10:20:00Z",
     "category": "Sport"
   },
   {
     "id": 11,
     "image": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1763487225.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
     "title": "Erik ten Hag fired as manager of Premier League giant Manchester United",
     "description": "In a surprising turn of events, Manchester United has dismissed Erik ten Hag after a series of disappointing results in the Premier League. Despite Ten Hag’s reputation and previous successes, the team struggled to maintain a winning streak, leading management to make this bold decision. Fans and players await news on a potential successor.",
     "date": "2024-10-20T15:30:00Z",
     "category": "Sport"
   },
   {
     "id": 12,
     "image": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2180498440.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
     "title": "Lamine Yamal makes history as Barcelona hammers Real Madrid in El Clásico",
     "description": "In a memorable El Clásico, young talent Lamine Yamal left an unforgettable mark by breaking records and helping Barcelona dominate Real Madrid with a 4-0 victory. His exceptional skills and calm under pressure have sparked enthusiasm, with analysts predicting a bright future for the rising star.",
     "date": "2024-10-18T18:45:00Z",
     "category": "Sport"
   },
   {
     "id": 13,
     "image": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2181267129.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
     "title": "Los Angeles Dodgers survive late comeback attempt by New York Yankees to take 2-0 lead in World Series",
     "description": "The Los Angeles Dodgers took a 2-0 lead in the World Series after holding off a strong late-game push from the New York Yankees. The Dodgers' defense shone under pressure, while the Yankees’ rally fell short, leaving fans eager for the next matchup in this heated series.",
     "date": "2024-10-17T14:10:00Z",
     "category": "Sport"
   },
   {
     "id": 14,
     "image": "https://media.cnn.com/api/v1/images/stellar/prod/2024-10-26t022004z-552666842-mt1usatoday24584316-rtrmadp-3-mls-mls-cup-playoffs-round-one-atlanta-united-fc-at-inter-miami-cf.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
     "title": "Inter Miami beats Atlanta United in Lionel Messi’s MLS playoff debut",
     "description": "In his MLS playoff debut, Lionel Messi led Inter Miami to a thrilling victory over Atlanta United, showcasing his unparalleled skill and strategic play. Fans celebrated the historic moment, as Messi’s influence continues to elevate the team’s performance and popularity in American soccer.",
     "date": "2024-10-15T21:00:00Z",
     "category": "Sport"
   },
   {
     "id": 15,
     "image": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2162270457.jpg?c=16x9&q=h_653,w_1160,c_fill/f_webp",
     "title": "None of the Big Three has won a grand slam this year.",
     "description": "For the first time in years, tennis legends Federer, Nadal, and Djokovic, collectively known as the Big Three, have failed to secure a Grand Slam title in 2024. Younger players like Carlos Alcaraz and Jannik Sinner are rapidly rising, marking a new era and intensifying the competition in the tennis world.",
     "date": "2024-10-12T09:15:00Z",
     "category": "Sport"
   },
   { "id": 16,
     "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/e00f/live/664ea300-94d1-11ef-9dbc-891a897d5938.jpg.webp",
     "title": "McDonald's Quarter Pounder back after E. coli outbreak",
     "description": "McDonald's is resuming sales of its Quarter Pounder burgers in all of its US restaurants after ruling out its beef patties as the source of an E. coli outbreak that left at least one person dead and dozens of others ill. The fast food giant said samples of its beef patties that were taken by the Colorado Department of Agriculture (CDA) had tested negative for the bacteria. The company added that the CDA had no plans for further testing.  McDonalds suspended sales of Quarter Pounder last week in around a fifth of its US restaurants in response to the outbreak. The issue appears to be contained to a particular ingredient and geography, and we remain very confident that any contaminated product related to this outbreak has been removed from our supply chain, Cesar Piña, McDonalds North America Chief Supply Chain Officer said in a statement. Earlier, the US Food and Drug administration singled out the slivered onions in Quarter Pounders as another potential source of the outbreak. McDonalds said it had stopped working with the supplier of the onions and had removed them from its supply chain.",
        "date": "2024-10-20T15:30:00Z",
     "category": "Business"
   },
   {
     "id": 17,
     "image": "https://ichef.bbci.co.uk/news/640/cpsprodpb/e308/live/394e0570-950e-11ef-875b-053ddaf3f72b.png.webp",
     "title": "Stolen cheese might be sold abroad - supplier",
     "description": "Hundreds of truckles of cheddar worth more than £300,000 have been stolen from London cheese specialist Neal’s Yard Dairy. Fraudsters posing as legitimate wholesalers received the 950 clothbound cheeses from the Southwark-based company before it was realised they were a fake firm. Neal's Yard said it had still paid the producers of the cheese so the individual dairies would not have to bear the costs. It is now trying to deal with the financial setback, a spokesperson said. More than 22 tonnes of three artisan cheddars, including Hafod Welsh, Westcombe, and Pitchfork were taken, which are all award-winning and have a high monetary value. Neal's Yard Dairy sells Hafod Welsh for £12.90 for a 300g piece, while Westcombe costs £7.15 for 250g and Pitchfork is priced at £11 for 250g. Patrick Holden, who owns the farm where Hafod cheddar is made, said: 'The artisan cheese world is a place where trust is deeply embedded in all transactions.'It’s a world where one’s word is one’s bond. It might have caused the company a setback, but the degree of trust that exists within our small industry as a whole is due in no small part to the ethos of Neal’s Yard Dairy’s founders.",
     "date": "2024-10-20T15:30:00Z",
     "category": "Business"
   },
   {
     "id": 18,
     "image": "https://ichef.bbci.co.uk/news/1536/cpsprodpb/50a2/live/dd58b3e0-9405-11ef-8e6d-e3e64e16c628.png.webp",
     "title": "Get ready to face harsh reality, Starmer to warn",
     "description": "The Budget will embrace the 'harsh light of fiscal reality' but 'better days are ahead', Sir Keir Starmer has said in a speech ahead of Wednesday's announcement. Seeking to justify what is expected to be a tax-raising Budget, the prime minister said he would 'run towards' challenges and would not 'continue the pretence that you can always have lower taxes and that your public services will run properly. Although he did not set out many details of the Budget, he did say the £2 bus fare cap would be replaced by a £3 cap, funded until the end of 2025.  He also announced £240m aimed at getting people back to work. The Conservatives have accused Sir Keir of breaking Labour's tax promises. In its general election manifesto, Labour promised not to increase taxes on working people - explicitly ruling out a rise in VAT, National Insurance or income tax. However, the pledge has recently come under renewed crutiny with the party's first Budget in 15 years expected to contain measures which could see taxes go up.",
     "date": "2024-10-18T18:45:00Z",
     "category": "Business"
   },
   {
     "id": 19,
     "image": "https://ichef.bbci.co.uk/news/640/cpsprodpb/2845/live/9631d330-94f9-11ef-8e6d-e3e64e16c628.jpg.webp",
     "title": "World's most indebted oil firm is headache for new Mexico leader",
     "description": "Pemex, the world's most indebted oil company, poses a significant challenge for Mexico's new administration. Economic advisors are urging reforms to manage the financial strain and ensure sustainable energy policies.",
     "date": "2024-10-17T14:10:00Z",
     "category": "Business"
   },
   {
     "id": 20,
     "image": "https://ichef.bbci.co.uk/news/1536/cpsprodpb/1fd3/live/5cebfca0-908e-11ef-a624-634f82a66078.jpg.webp",
     "title": "Tariffs hurt his business. He's voting for Trump anyway",
     "description": "Despite experiencing financial setbacks due to tariffs, a business owner has announced his support for Donald Trump in the upcoming election, citing his alignment with other policies as the reason for his vote.",
     "date": "2024-10-15T21:00:00Z",
     "category": "Business"
   },
   {
     "id": 21,
     "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/6f37/live/9aeebb30-92d9-11ef-9e9f-f94aa162b9ae.jpg.webp",
     "title": "The couple who took on Google and cost the tech giant £2bn",
     "description": "In a landmark legal battle, a UK couple successfully challenged Google, resulting in a £2bn fine for the tech giant. Their case has set a precedent and highlights issues of data privacy and corporate accountability.",
     "date": "2024-10-12T09:15:00Z",
     "category": "Business"
   },{
     "id": 22,
     "image": "https://ichef.bbci.co.uk/images/ic/1024x576/p0k06p8g.jpg.webp",
     "title": "How smartwatches are saving lives",
     "description": "Smartwatches are rapidly evolving beyond simple fitness tracking devices to become essential health monitoring tools. By continuously tracking heart rate, oxygen levels, and other vital signs, these wearables alert users to potential health issues, sometimes before symptoms are noticeable. Doctors are now leveraging data from devices like the Apple Watch and Fitbit to help detect irregular heart rhythms and early signs of chronic conditions. As a result, these gadgets are helping individuals manage conditions such as diabetes and heart disease more effectively. Experts believe this technology is opening a new frontier in preventative healthcare.",
     "date": "2024-10-20T15:30:00Z",
     "category": "Innovation"
   },
   {
     "id": 23,
     "image": "https://ichef.bbci.co.uk/images/ic/640x360/p0k06spv.jpg.webp",
     "title": "The twins who invent their own language",
     "description": "In a fascinating study, researchers observed a set of twins who communicate in a language only they understand, often confusing family and friends. Experts suggest that the twins’ unique linguistic bond might stem from spending most of their time with each other, thus developing a special form of communication. Such cases are rare but offer incredible insights into language acquisition and the human brain's adaptability. Linguists are studying the twins’ 'private language' to understand the building blocks of speech and how vocabulary and syntax can evolve organically. This phenomenon may shed light on the foundations of human communication.",
     "date": "2024-10-20T15:30:00Z",
     "category": "Innovation"
   },
   {
     "id": 24,
     "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/2794/live/326830a0-9315-11ef-a741-5bc7ceeb685a.jpg.webp",
     "title": "Trump and Vance possible targets of China-backed cyber attack",
     "description": "Recent intelligence reports have raised alarms about possible cyber attacks against high-profile figures, including Donald Trump and J.D. Vance, allegedly orchestrated by Chinese-backed hackers. These attacks seem to be part of a broader cyber strategy to influence international politics and gather sensitive information. Security experts warn that the sophisticated methods employed in these attacks are designed to avoid detection, making them especially dangerous. Both Trump and Vance have been briefed on potential vulnerabilities and are advised to take enhanced cybersecurity measures. The investigation is ongoing, with authorities considering stronger protective protocols.",
     "date": "2024-10-18T18:45:00Z",
     "category": "Innovation"
   },
   {
     "id": 25,
     "image": "https://ichef.bbci.co.uk/images/ic/640x360/p0jzxv20.jpg.webp",
     "title": "The boy who lived a secret life in World of Warcraft",
     "description": "For years, a young boy found comfort and adventure in the virtual world of World of Warcraft, leading a secret life that only he knew. In the game, he could be whoever he wanted, overcoming challenges that seemed impossible in the real world. The story highlights the complex psychological relationship between reality and virtual spaces, where people often escape to cope with life’s difficulties. Experts are now examining the impact of immersive gaming on youth, particularly its effects on emotional well-being and personal identity. His journey is a poignant reminder of the solace and connection virtual worlds can provide.",
     "date": "2024-10-17T14:10:00Z",
     "category": "Innovation"
   },
   {
     "id": 26,
     "image": "https://ichef.bbci.co.uk/news/640/cpsprodpb/77a6/live/b5ff54b0-92da-11ef-89ae-5575c76d98e6.png.webp",
     "title": "The Online Safety Act is one year old. Has it made UK children any safer?",
     "description": "One year after the Online Safety Act was introduced in the UK, policymakers and parents alike are questioning its effectiveness in protecting children online. While the law mandates stricter content moderation and privacy safeguards, critics argue that tech companies are still lagging in enforcement. Reports show that harmful content and online harassment remain significant issues, despite the new regulations. Meanwhile, child advocacy groups are pushing for additional protections, including stricter age verification and more substantial penalties for violators. The Act’s impact on creating a safer digital space for children is still under scrutiny as incidents continue.",
     "date": "2024-10-15T21:00:00Z",
     "category": "Innovation"
   },
   {
     "id": 27,
     "image": "https://ichef.bbci.co.uk/images/ic/raw/p0hdrsmy.jpg.webp",
     "title": "Tech Decoded: Sign up to our newsletter",
     "description": "Keeping up with the rapidly changing world of technology can be overwhelming. Our Tech Decoded newsletter breaks down complex tech topics, offering insights into emerging trends, cybersecurity, artificial intelligence, and the latest gadget releases. Delivered weekly, the newsletter helps readers stay informed on the tech industry’s most important developments. Whether you’re a tech enthusiast or simply looking to understand how these changes affect daily life, Tech Decoded offers something for everyone. Sign up now to get the latest tech news and expert insights directly in your inbox.",
     "date": "2024-10-12T09:15:00Z",
     "category": "Innovation"
   },
   {
     "id": 28,
     "image": "https://ichef.bbci.co.uk/images/ic/1024x576/p0k06l1s.jpg.webp",
     "title": "Should there be a ban on teenage popstars?",
     "description": "The entertainment industry is filled with young pop sensations who reach stardom while still in their teenage years. While these young artists enjoy fame and fortune, experts question the potential harm this may cause to their mental health and personal development. Teenage popstars are often subjected to intense media scrutiny, long work hours, and the pressures of public life, which can disrupt their education and social relationships. Advocates of a ban argue that teenagers should be protected from these stressors until they are emotionally and physically mature. Opponents, however, believe such a ban could stifle talent and limit opportunities. The debate has sparked a larger conversation about the responsibilities of the music industry in safeguarding its youngest stars.",
     "date": "2024-10-20T15:30:00Z",
     "category": "Culture"
   },
   {
     "id": 29,
     "image": "https://ichef.bbci.co.uk/news/480/cpsprodpb/c735/live/f2d7d3d0-9514-11ef-9cde-517ea4c35d17.jpg.webp",
     "title": "Michael Parkinson's son defends new AI podcast",
     "description": "In a groundbreaking move, the late Michael Parkinson's voice and personality are set to be brought back through artificial intelligence for a new podcast, sparking debate about the ethics of using AI to recreate deceased public figures. Michael's son, Mike Parkinson, has defended the project, explaining that the family sees it as a way to keep his father’s legacy alive for future generations. The podcast will use advanced machine learning to replicate Parkinson's voice, style, and mannerisms based on extensive interviews and recordings from his decades-long career. However, some critics argue that using AI in this way raises ethical concerns, particularly around consent and potential misrepresentation. Supporters, on the other hand, argue that AI could provide valuable educational and cultural contributions by preserving the voices of significant public figures.",
     "date": "2024-10-20T15:30:00Z",
     "category": "Culture"
   },
   {
     "id": 30,
     "image": "https://ichef.bbci.co.uk/news/480/cpsprodpb/50db/live/f19b4480-94b9-11ef-876e-6777cae93ac1.jpg.webp",
     "title": "Chalamet makes surprise appearance at lookalike event",
     "description": "In a fun and unexpected turn of events, Hollywood actor Timothée Chalamet surprised fans by appearing at a lookalike contest held in his honor. The contest, which drew dozens of Chalamet 'doppelgängers', showcased fans emulating his signature style and mannerisms. Attendees were thrilled when Chalamet himself appeared, blending in with participants and even joining in on the competition. The event quickly went viral, with social media lighting up with photos and videos of the actor mingling with his lookalikes. Chalamet later shared his excitement about the event, saying it was a unique experience to see so many people appreciate his work and persona. The gathering has since sparked discussions about celebrity culture and the power of fan communities.",
     "date": "2024-10-18T18:45:00Z",
     "category": "Culture"
   },
   {
     "id": 31,
     "image": "https://ichef.bbci.co.uk/news/480/cpsprodpb/6067/live/acf53410-9475-11ef-8e6d-e3e64e16c628.jpg.webp",
     "title": "Singer apologises after swearing on live TV during US anthem",
     "description": "A well-known singer found themselves in hot water after accidentally swearing during a live rendition of the U.S. national anthem. The incident occurred at a high-profile sports event, where millions of viewers witnessed the unexpected slip. Following the performance, the artist issued an apology, explaining that nerves and excitement had contributed to the mistake. While some viewers expressed their disappointment, others came to the singer's defense, arguing that everyone makes mistakes under pressure. The moment has ignited debate on social media about the importance of live performances and the increasing challenges artists face in high-stakes environments. The singer has since offered to perform again to make amends, hoping to turn the incident into a learning moment.",
     "date": "2024-10-17T14:10:00Z",
     "category": "Culture"
   },
   {
     "id": 32,
     "image": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/f174/live/626a5800-9491-11ef-8bf4-072493820773.jpg.webp",
     "title": "Veteran radio DJ Johnnie Walker retires after 58 years",
     "description": "Legendary radio DJ Johnnie Walker has announced his retirement after an impressive 58-year career. Known for his charisma, humor, and passion for music, Walker has been a fixture on the airwaves, shaping the musical tastes of generations. His career began in the 1960s, during the golden era of rock and roll, and spanned numerous genres and decades. Fans and colleagues have expressed gratitude for his contribution to the music industry, with many citing his impact on radio as transformative. Walker’s departure marks the end of an era for British radio, and plans are underway for a special tribute show celebrating his remarkable career and legacy.",
     "date": "2024-10-15T21:00:00Z",
     "category": "Culture"
   },
   {
     "id": 33,
     "image": "https://ichef.bbci.co.uk/images/ic/1920x1080/p0jzxy1l.jpg.webp",
     "title": "How Schwarzenegger became the bad guy in The Terminator",
     "description": "When The Terminator was first released, Arnold Schwarzenegger became an overnight sensation as the iconic villain in James Cameron's sci-fi classic. However, few know the story behind how Schwarzenegger, initially known for his roles as a hero, embraced this role as the ruthless, unstoppable machine. Schwarzenegger originally auditioned for the role of the film's protagonist, but after discussions with Cameron, both realized that Schwarzenegger's imposing physicality and presence made him perfect for the Terminator. This career-defining role not only expanded his range as an actor but also forever changed the landscape of action films. The decision paid off, as Schwarzenegger became a Hollywood icon, with The Terminator cementing his legacy in pop culture.",
     "date": "2024-10-12T09:15:00Z",
     "category": "Culture"
   },
   {
    "id": 34,
    "image": "https://ichef.bbci.co.uk/images/ic/1920x1080/p0jz48hm.jpg.webp",
    "title": "How Monet's paintings changed the way we see London",
    "description": "Claude Monet’s sojourn in London was transformative, not only for his own artistic vision but also for the entire art world’s perception of urban beauty. Fascinated by the dense fog enveloping London’s riverbanks, he captured how light refracted through mist to create an ethereal landscape, imbuing stone and water with a dreamlike quality. His paintings of the Houses of Parliament, often shrouded in hazy light, challenged conventional notions of clarity in art, emphasizing instead the transient beauty of atmospheric conditions. Monet’s London work marked a profound departure from realistic portrayals of architecture, capturing the city as a living, breathing entity that existed in constant flux. His use of color, light, and shadow changed how future artists would approach cityscapes, making his works some of the most celebrated urban depictions in art history.",
    "date": "2024-10-20T15:30:00Z",
    "category": "Art"
 }
,
 {
    "id": 35,
    "image": "https://ichef.bbci.co.uk/images/ic/raw/p0jqb6l4.jpg.webp",
    "title": "Forgotten fighters of the Haitian Revolution",
    "description": "The Haitian Revolution stands as a monumental but often underrepresented event in the chronicles of history. Initiated by enslaved people on the island of Hispaniola, this revolt was unprecedented in both its scale and its impact. Figures such as Toussaint Louverture and Jean-Jacques Dessalines led the charge, transforming Haiti into the first Black republic and marking the only successful slave-led revolution in the world. Despite this, the contributions of many other fighters remain largely forgotten. These individuals endured unimaginable hardships and showed extraordinary resilience, inspired by an unwavering desire for freedom. By examining these stories, historians hope to shed light on the unsung heroes who helped secure a future free from colonial rule, inspiring subsequent freedom movements across Latin America and the Caribbean.",
    "date": "2024-10-20T15:30:00Z",
    "category": "Art"
 }
,
 {
    "id": 36,
    "image": "https://ichef.bbci.co.uk/images/ic/1376x774/p0hvyjbs.jpg.webp",
    "title": "Dalí talks about his iconic 'aggressive' moustache",
    "description": "Salvador Dalí’s moustache was more than just a personal style choice—it became an extension of his eccentric personality and an enduring symbol of surrealism. Sharp, pointed, and meticulously groomed, Dalí’s moustache was as 'aggressive' as his art, embodying his approach to challenging norms. In rare interviews, Dalí shared that his moustache was a statement against conformity and a tool for self-expression, as powerful in its own way as his paintings. For Dalí, the moustache encapsulated his philosophy of breaking free from reality and diving into a world defined by personal vision. His fans and critics alike came to see his moustache as a work of art in itself, symbolizing the artist’s lifelong quest to provoke, challenge, and delight.",
    "date": "2024-10-18T18:45:00Z",
    "category": "Art"
 }
,
 {
    "id": 37,
    "image": "https://ichef.bbci.co.uk/images/ic/800xn/p0j9m5tx.jpg.webp",
    "title": "Ida Hammershøi: The identity of art's most famous 'faceless woman'",
    "description": "Ida Hammershøi, the wife and muse of Danish painter Vilhelm Hammershøi, has remained a captivating mystery in the art world for over a century. Often depicted facing away or obscured, Ida’s presence in Hammershøi’s works has sparked endless fascination and speculation. This 'faceless woman' embodies themes of solitude and introspection, capturing the quiet tension of domestic life. Her enigmatic portrayal has led some to view her as a symbol of womanhood's obscured role within historical narratives. Scholars argue that these portrayals reveal as much about Hammershøi's inner world as about Ida herself, positioning her as both a real person and an artistic construct. Today, she remains an icon of mystery, with audiences continuing to ponder the significance of her facelessness in her husband’s melancholic interiors.",
    "date": "2024-10-17T14:10:00Z",
    "category": "Art"
 }
,
 {
    "id": 38,
    "image": "https://ichef.bbci.co.uk/images/ic/800xn/p0jz4b2z.jpg.webp",
    "title": "AI art: The end of creativity or the start of a new movement?",
    "description": "The advent of AI art has sparked intense debates about the future of creativity, raising questions about what defines artistry in a world where machines can generate images. While some fear that AI could spell the end for traditional artists, others view it as the beginning of a new, boundary-pushing movement. Artists and technologists alike are exploring how AI can collaborate with human creativity to expand the possibilities of artistic expression. However, critics argue that AI lacks the human experience and emotional depth that traditionally define art. This dichotomy reveals both the excitement and anxiety surrounding AI’s role in reshaping creative landscapes, leaving the art community to grapple with the complex future of digital and human co-creation.",
    "date": "2024-10-15T21:00:00Z",
    "category": "Art"
 }
,
 {
    "id": 39,
    "image": "https://ichef.bbci.co.uk/images/ic/320x180/p0fmhnb3.jpg.webp",
    "title": "Why Korea's moon jar is so iconic",
    "description": "The Korean moon jar is a remarkable artifact that exemplifies the simplicity and elegance of traditional Korean ceramics. Created during the Joseon Dynasty, these jars are celebrated for their unpretentious, rounded forms, which embody a sense of purity and harmony. Unlike other ornate ceramics, moon jars are distinctively white, symbolizing modesty and natural beauty in Korean culture. The appeal of these jars lies not in perfection but in their organic imperfections, which reflect the hand-crafted process and philosophical ideals of wabi-sabi. Over centuries, the moon jar has become an icon of Korean heritage, embodying the nation's deep respect for artistry that celebrates restraint and the beauty of imperfection.",
    "date": "2024-10-12T09:15:00Z",
    "category": "Art"
 },
 {
  "id": 40,
  "image": "https://ichef.bbci.co.uk/images/ic/1920x1080/p0k071x1.jpg.webp",
  "title": "The surprising 'lesbian capital of the UK'",
  "description": "Nestled in the heart of England, this city has unexpectedly become a beacon for the LGBTQ+ community, especially for lesbian couples and individuals seeking an inclusive environment. Known for its progressive policies, vibrant arts scene, and thriving social spaces, it has attracted people from all over the country and beyond. Community initiatives and support networks have helped transform this area into a place where LGBTQ+ people feel safe and celebrated. The city’s evolution into a haven for lesbians symbolizes broader changes in societal acceptance and the drive for equal rights, making it a powerful example of how communities can evolve to embrace diversity.",
  "date": "2024-10-23T10:20:00Z",
  "category": "Travel"
}
,
{
  "id": 41,
  "image": "https://ichef.bbci.co.uk/images/ic/1920x1080/p0jzz0xs.jpg.webp",
  "title": "Kamayan feasts: The 'hands-only' meals bringing a nation together",
  "description": "Kamayan, a traditional Filipino feast, emphasizes communal dining and is enjoyed without utensils, encouraging a connection to food and community. Featuring a vibrant spread of meats, rice, fruits, and vegetables arranged on banana leaves, this style of eating fosters a sense of unity and celebration. Kamayan meals have surged in popularity beyond the Philippines, becoming a symbol of cultural pride and a way for families to reconnect over a shared, hands-on experience. This practice, rooted in Filipino hospitality and family values, offers a deeper connection to heritage, creating an immersive and sensory dining experience that is now celebrated worldwide.",
  "date": "2024-10-22T10:20:00Z",
  "category": "Travel"
}
,
{
  "id": 42,
  "image": "https://ichef.bbci.co.uk/images/ic/1920x1080/p0jzpc3t.jpg.webp",
  "title": "An F1 driver's guide to Mexico City",
  "description": "Mexico City, with its dynamic atmosphere, rich culture, and passionate fans, has become a favorite destination on the Formula 1 calendar. Drivers are drawn to the city’s vibrant energy, whether they’re navigating the iconic Autódromo Hermanos Rodríguez or enjoying local cuisine and sights. The city offers a unique blend of challenges and rewards, from high altitude to enthusiastic crowds, making each visit unforgettable. This guide explores the city’s standout features, from its culinary delights to historical landmarks, highlighting why Mexico City is a must-visit for both F1 fans and those seeking an immersive cultural experience.",
  "date": "2024-10-23T10:20:00Z",
  "category": "Travel"
},
{
  "id": 43,
  "image": "https://ichef.bbci.co.uk/images/ic/480x270/p0jy1w4y.jpg.webp",
  "title": "Japan's car-free town that autumn hikers love",
  "description": "Nestled amid Japan's scenic landscapes, this car-free town has become a top destination for hikers, especially in the fall when its forests explode with vibrant hues of red, orange, and yellow. Accessible only by train or on foot, the town provides a rare escape from the hustle of modern life. Visitors are drawn to its breathtaking mountain trails and serene environment, creating an experience that feels like stepping back in time. In recent years, this town has seen a surge in eco-tourism, with efforts to preserve its unique natural beauty while offering a tranquil retreat for those seeking a deep connection with nature.",
  "date": "2024-10-20T10:20:00Z",
  "category": "Travel"
}
,
{
  "id": 44,
  "image": "https://ichef.bbci.co.uk/images/ic/480x270/p0jxyvnt.jpg.webp",
  "title": "Canada's 235km bike-friendly food trail",
  "description": "Stretching over 235 kilometers, this scenic food trail in Canada offers a unique experience for biking enthusiasts and food lovers alike. Winding through lush farmlands and picturesque landscapes, the trail allows visitors to explore local culinary offerings, from farm-fresh produce to artisanal cheeses and wines. This bike-friendly route has become a symbol of sustainable tourism, encouraging both fitness and support for local businesses. With dedicated bike paths and rest stops, the trail is accessible to people of all ages and abilities, making it a popular destination for those looking to combine adventure with culinary delights.",
  "date": "2024-10-19T10:20:00Z",
  "category": "Travel"
}
,
{
  "id": 46,
  "image": "https://ichef.bbci.co.uk/news/640/cpsprodpb/1b94/live/a1c1b120-95cb-11ef-9260-19e6a950e830.jpg.webp",
  "title": "Inside Trump's push to recruit an army of volunteers in battleground Georgia",
  "description": "As the 2024 election approaches, former President Donald Trump has ramped up efforts to recruit a massive volunteer force in key battleground states like Georgia. Facing an intensely competitive political landscape, his campaign has targeted grassroots support, aiming to mobilize volunteers to assist with canvassing, rallies, and get-out-the-vote efforts. This move underscores Trump's focus on state-level operations that could prove crucial in swing states, particularly Georgia, where recent elections have shown narrow margins. The recruitment drive seeks to solidify a base willing to work tirelessly toward securing a win in the upcoming election, highlighting the importance of ground-level activism in the high-stakes political environment.",
  "date": "2024-10-23T10:20:00Z",
  "category": "Politics"
}
   ];
  

  class CustomSearch extends HTMLElement {
    constructor() {
      super();
      this.articles = articles;
    }
  
    connectedCallback() {
      const dialogBtn = this.querySelector('.dialog-search');
      const closeBtn = this.querySelector('.close-btn');
      const dialog = this.querySelector('dialog');
  
      dialogBtn.addEventListener('click', () => {
        dialog.showModal();
      });
      closeBtn.addEventListener('click', () => {
        dialog.close();
      });
  
      const siteSearch = this.querySelector('#site-search');
      siteSearch.addEventListener('input', (event) => this.search(event));
    }
  
    search(event) {
      event.preventDefault();
      const siteSearch = this.querySelector('#site-search');
      const term = siteSearch.value;
      this.renderResults(term);
    }
  
    renderResults(term = '') {
      const searchResults = this.querySelector('#search-results');
      searchResults.innerHTML = '';
    
      if (term.trim() === '') return;
    
      const _articles = this.articles.filter(article =>
        article.title.toLowerCase().includes(term.toLowerCase())
      );
    
      const template = this.querySelector('template').content;
    
      _articles.map(article => {
        const li = template.querySelector('li').cloneNode(true);
    

        const link = document.createElement('a');
        link.href = `article.html?id=${article.id}`;
        link.style.textDecoration = 'none';
        link.style.color = 'inherit';
    
        li.querySelector('.card .item-image').src = article.image;
        li.querySelector('.card .item-title').textContent = article.title;
        li.querySelector('relative-time').setAttribute('time', article.date);
    

        link.appendChild(li);
        searchResults.appendChild(link);
      });
    }
    
  
  }
  customElements.define('custom-search', CustomSearch);
  

  const getId = () => {
    const searchParams = new URLSearchParams(location.search.slice(1));
    return Number(searchParams.get('id'));
  };
  

  class CustomArticle extends HTMLElement {
    constructor() {
      super();
      this.articleId = getId();
    }
    connectedCallback() {
      this.render();
    }
  
    render() {
      const article = articles.find(article => article.id === this.articleId);
      const h1 = this.querySelector('h1');
      const img = this.querySelector('img');
      const p = this.querySelector('p');
      this.querySelector('relative-time').setAttribute('time', article.date);
  
      if (article) {
        h1.textContent = article.title;
        img.src = article.image;
        p.textContent = article.description;
        timeElement.setAttribute('time', new Date(article.date).getTime());
      }
    }
  }
  customElements.define('custom-article', CustomArticle);
  
  // Funcion para el menu desplegable
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (const dropdown of dropdowns) {
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
        }
      }
    }
  };
  