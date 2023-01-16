import React from "react";
import GitHubCalendar from "react-github-calendar";
import styles from "./GitStats.module.css";
const GitStats = () => {
  return (
    <div className={styles.gitStats}>
      {/* Heading */}
      <div className={styles.headingContainer}>
        <span className={styles.orangeDash}></span>
        <h2 className={styles.heading}>GITHUB CONTRIBUTIONS</h2>
        <span className={styles.orangeDash}></span>
      </div>

      {/* Calendar */}
      <div className={styles.calendar}>
        <GitHubCalendar username="drahul97" />
      </div>

      {/* Stats */}
      <div className={styles.commits}>
        <img
          className={styles.commit1}
          src="https://github-readme-stats.vercel.app/api?username=dRahul97&theme=radical&hide_border=false&include_all_commits=true&count_private=true"
          alt=""
        />
        <img
          className={styles.commit2}
          src="https://github-readme-streak-stats.herokuapp.com/?user=dRahul97&theme=radical&hide_border=false"
          alt=""
        />
        <img
          className={styles.commit3}
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=dRahul97&theme=radical&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
          alt=""
        />
      </div>
    </div>
  );
};

export default GitStats;
