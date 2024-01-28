import MyProfileCard from "../../shared/MyProfileCard";


const skills = [
    {
        id:1,
      skill: "HTML+CSS",
      level: "advanced",
      color: "#2662EA"
    },
    {
        id:2,
      skill: "JavaScript",
      level: "advanced",
      color: "#EFD81D"
    },
    {
        id:3,
      skill: "Web Design",
      level: "intermediate",
      color: "#C3DCAF"
    },
    {
        id:4,
      skill: "Git and GitHub",
      level: "intermediate",
      color: "#E84F33"
    },
    {
        id:5,
      skill: "React",
      level: "advanced",
      color: "#60DAFB"
    },
    {
        id:6,
      skill: "Svelte",
      level: "beginner",
      color: "#FF3B00"
    }
  ];

const SkillList = () => {
  return (
    <>
    <div className="grid grid-cols-3 gap-[2rem] items-center py-[3rem] ">
        {
    skills.map((mySkill)=>(
        <MyProfileCard  key={mySkill.id} {...mySkill}/>
    ))
       }
    </div>

    </>
    )
}

export default SkillList