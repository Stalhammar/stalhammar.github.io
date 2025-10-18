import SplitText from "../components/animations/SplitText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export default function Home() {
  return (
    <div className="flex justify-center m-30">
      <SplitText
        text="Welcome to my digital portfolio!"
        className="text-6xl font-headline text-black dark:text-neutral-500 "
        delay={100}
        duration={0.4}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />
    </div>
  );
}
