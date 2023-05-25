import "./Posts.css"
import React,{useState,useEffect} from 'react';
import Post from "./Post";
const Posts =()=>{
const blogPosts =[

    {
        title: "FIFA World Cup",
        body: `Global Event: The FIFA World Cup is the most prestigious international football tournament. It is organized by the Fédération Internationale de Football Association (FIFA) and brings together national teams from around the world.
        Frequency: The World Cup is held every four years, with teams competing in a series of qualification matches in the years leading up to the tournament. The inaugural tournament took place in 1930, and it has been held regularly since 1950.	
        Participation: Initially, the World Cup featured 13 teams, but the number has increased over the years. The 2018 edition had 32 teams participating, divided into eight groups of four. `,
        established :" the Fédération Internationale de Football Association (FIFA).",
        imgUrl:
            "https://images.unsplash.com/photo-1637203727317-3cc1a557cdbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ybGQlMjBjdXAlMjB0cm9waHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
    {
        title: "International Cricket Council",
        body: `
        ICC stands for the International Cricket Council. It is the international governing body for the sport of cricket. The ICC was founded as the Imperial Cricket Conference in 1909 and later renamed the International Cricket Conference in 1965 before adopting its current name in 1989.
         The ICC is responsible for organizing and overseeing international cricket tournaments, formulating rules and regulations, and promoting the sport globally. It consists of member cricket boards from various countries and is headquartered in Dubai, United Arab Emirates. The ICC is best known for organizing major cricket events such as the ICC Cricket World Cup, ICC Champions Trophy, ICC World Twenty20, and ICC Test Championship. It plays a crucial role in the development, administration, and growth of cricket worldwide..`,
        established: "The ICC has over 100 member countries.",
        imgUrl:
            "https://www.insidesport.in/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-16-at-9.12.54-PM.jpeg?w=690",
    },
    {
        title: "Commonwealth Games",
        body: `The Commonwealth Games is a quadrennial international multi-sport event among athletes from the Commonwealth of Nations. The event was first held in 1930, and, with the exception of 1942 and 1946, have successively run every four years since.The event was called the British Empire Games from 1930 to 1950, 
        the British Empire and Commonwealth Games from 1954 to 1966,and British Commonwealth Games from 1970 to 1974.Athletes with a disability are included as full members of their national teams since 2002, making the Commonwealth Games the first fully inclusive international multi-sport event.In 2018, the Games became the first global multi-sport event to feature an equal number of men's and women's medal events and four years later
          they became the first global multi-sport event to have more events for women than men.`,
        established: "The British Empire and Commonwealth Games Federation",
        imgUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/SLNSW_23801_Opening_Empire_Games_Sydney_Cricket_Ground.jpg/330px-SLNSW_23801_Opening_Empire_Games_Sydney_Cricket_Ground.jpg",
    },
    {
        title: "FINA World Aquatics Championships",
        body: `The FINA World Championships or World Aquatics Championships are the World Championships for aquatics sports: swimming, diving, high diving, open water swimming, artistic swimming, and water polo. They are run by World Aquatics, and all swimming events are contested in a long course (50-metre) pool.
      The event was first held in 1973 in Belgrade, Yugoslavia, and is now held every two years. From 1978 to 1998, the World Championships were held every four years, in the even years between Summer Olympic years. From 2001 until 2019, the Championships have been held every two years, in the odd years.`,
      established: " The International Swimming Federation (FINA).",
        imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYUNefQC6DtVfPQB1HdmnnzTEEyJl9nR494MDcYMZWBNEdhPBedWyd3Bc31QTbV8FVOIE&usqp=CAU",
    },
    {
            title: "Athletics World Championships",
            body: `The World Athletics Championships (until 2019 known as the World Championships in Athletics) are a biennial athletics competition organized by World Athletics (formerly IAAF, International Association of Athletics Federations). 
            Alongside the Olympic Games, they represent the highest level championships of senior international outdoor athletics competition for track and field athletics globally, including marathon running and race walking.
             Separate World Championships are held by World Athletics for certain other outdoor events, including cross-country running and half-marathon, as well as indoor and age-group championships.`,
          established: "the International Association of Athletics Federations (IAAF)",
            imgUrl:
                "https://www.insidesport.in/wp-content/uploads/2022/07/Day-2-USE-AFTER.jpg",
    },
    {
                title: "Paralympic Games",
                body: `The Paralympic Games or Paralympics, also known as the Games of the Paralympiad, is a periodic series of international multisport events involving athletes with a range of physical disabilities. There are Winter and Summer Paralympic Games, 
                which since the 1988 Summer Olympics in Seoul, South Korea, are held almost immediately following the respective Olympic Games. All Paralympic Games are governed by the International Paralympic Committee (IPC).`,
              established: " Dr. Ludwig Guttmann",
                imgUrl:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/IPC_logo_%282019%29.svg/1280px-IPC_logo_%282019%29.svg.png",
    },

];
const [count,setCount] =useState(0);
useEffect(()=>{
    const storedCount =localStorage.getItem('count',0);
    setCount(parseInt(storedCount));
},[]);
useEffect(()=>{
    localStorage.setItem('count',Math.floor(Math.random()*blogPosts.length).toString());
},[count]);
 return(
    <div className="posts-container">
        <Post key={count} index={count} post={blogPosts[count]}/>
    </div>          
 );
};
export default Posts;