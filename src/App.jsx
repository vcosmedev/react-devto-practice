import React from 'react'; // From React v.17 is not necessary import React but doing it is a good practice though.
import { RightAside } from './scenes/RightAside';

const PostTopic = () => {
  const getStyles = (topic) => {
    if (topic === "discuss") return "bg-green-100 text-green-400";
    if (topic === "productivity") return "bg-green-100 text-red-400";
    if (topic === "beginners") return "bg-green-100 text-purple-400";
  };

  return (
  <div className={`p-1 rounded-md ${getStyles(props.topic)}`}>#{props.topic}
    # <span className="text-black">{props.topic}</span>
  </div>
  );
}

const Post = (props) => {
  const { profileImageUrl, name, time, title, tags, reactions, readingTime } = props;

  return <article className="flex items-start border border-gray-300 rounded-lg p-5 space-x-2">
    <img src={profileImageUrl} className="w-8 h8" alt=""/>
    <section className="w-full">
      <p>{name}</p>
      <p>{time}</p>
      <p className="text-xl font-bold mt-2">{title}</p>
      <section>
        {tags.map((tag) => (
          <PostTopic topic={tag} />
        ))}
      </section>
      <section className="flex justify-bteween w-full">
        <section className="flex space-x-4">
          <button>{reactions} Reactions</button>
          <button>Add comment</button>
        </section>
        <section>
          <p>{reareadintTimections} min read</p>
        </section>
      </section>
    </section>
  </article>

};

function App() {
  return (
    <section className='grid grid-cols-3'>
      <aside>Links</aside>
      <main className="">
        <Post 
        name="Samuel Pires" 
        time="Oct 21 (8 hours ago)" 
        title="Boreout" 
        reaction={8} 
        readingTime={2}
        />
        </main>
      <RightAside />
    </section>
  );
}

export default App;
