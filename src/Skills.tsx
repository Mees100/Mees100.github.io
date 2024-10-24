import styles from "./Skills.module.css";

function Skills() {
  return (
    <>
      <table className={styles.skills}>
        <tbody>
          <tr>
            <th className={styles.skillsColor1} rowSpan={3}>
              Web Foundations
            </th>
            <td className={styles.skillsColor1}>
              Fundamentals of HTML:<br></br> structure, tables, semantic HTML
            </td>
          </tr>
          <tr>
            <td className={styles.skillsColor1}>
              Fundamentals of CSS:<br></br> the Box Model, display and
              positioning, colours, typography, secondary navigation
            </td>
          </tr>
          <tr>
            <td className={styles.skillsColor1}>Deploying websites</td>
          </tr>
          <tr>
            <th className={styles.skillsColor2}>Fundamentals of Web Design</th>
            <td className={styles.skillsColor2}>
              Layout with flexbox, wireframing, colour theory, colour for UI,
              responsive design
            </td>
          </tr>
          <tr>
            <th className={styles.skillsColor1}>JavaScript</th>
            <td className={styles.skillsColor1}>
              DOM,data types, conditional statements, functions, scope, arrays,
              loops, objects, iterators, higher-order functions, DOM events,
              errors and debugging
            </td>
          </tr>
          <tr>
            <th className={styles.skillsColor2}>Git and GitHub</th>
            <td className={styles.skillsColor2}>
              Work in the terminal, important Git operations, Git Branching,
              work in GitHub, Git teamwork
            </td>
          </tr>
          <tr>
            <th className={styles.skillsColor1}>React en TypeScript</th>
            <td className={styles.skillsColor1}>
              Vaardigheden en ervaring met Vite, virtual DOM, JSX, react
              components, creating a react app, componnets interacting, props,
              hooks, react styles, react router, children, Bootstrap, markdown
            </td>
          </tr>
          <tr>
            <th className={styles.skillsColor2}>Languages</th>
            <td className={styles.skillsColor2}>
              Nederlands, Engels, Russisch
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default Skills;
