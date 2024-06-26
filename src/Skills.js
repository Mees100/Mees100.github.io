import styles from "./Skills.module.css";
import Footer from "./Footer.js"



function Skills() {
  return (
    <>
<table>
  <tr>
    <th className={styles.skillsColor1} rowspan="3">Web Foundations</th>
    <td className={styles.skillsColor1}>fundamentals of HTML: structure, tables, semantic HTML</td>
    </tr>
    <tr>
    <td className={styles.skillsColor1}>fundamentals of CSS: the Box Model, display and positioning, colours, typography, secondary navigation</td>
  </tr>
  <tr>
    <td className={styles.skillsColor1}>deploying websites</td>
  </tr>
  <tr>
  <th className={styles.skillsColor2}>Fundamentals of Web Design</th>
  <td className={styles.skillsColor2}>layout with flexbox, wireframing, colour theory, colour for UI, responsive design</td>
  </tr>
  <tr>
  <th className={styles.skillsColor1}>JavaScript</th>  
    <td className={styles.skillsColor1}>DOM,data types, conditional statements, functions, scope, arrays, loops, objects, iterators, higher-order functions, DOM events, errors and debugging</td>
    </tr>
    <tr>
      <th className={styles.skillsColor2}>Git and GitHub</th>
      <td className={styles.skillsColor2}>important Git operations, Git Branching, Git teamwork</td>
    </tr>
    <tr>
      <th className={styles.skillsColor1}>React</th>
      <td className={styles.skillsColor1}>virtual DOM, JSX, react components, creating a react app, componnets interacting, props, hooks, react styles, react router</td>
    </tr>
    <tr>
      <th className={styles.skillsColor2}>Languages</th>
      <td className={styles.skillsColor2}>Nederlands, Engels, Russisch</td>
    </tr>
</table>
<Footer />
    </>
  )
}
export default Skills;