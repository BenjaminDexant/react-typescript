import React from 'react'
import { Badge } from "../styles/element";

interface ISkillProp {
  title: string,
  votes: number,
}

export default function Skill({ title, votes }: ISkillProp): JSX.Element {
  return <li>
    {title}
    <Badge votes={votes}>{votes}</Badge>
  </li>
}

