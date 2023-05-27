import React from "react";
import GitHubCalendar from "react-github-calendar";
import styles from "./GitStats.module.css";
import contributions from "../../images/contributions.png";
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
        <img src={contributions} alt="" height={"100%"} width={"99%"} />
        {/* <GitHubCalendar
          style={{ transform: "scale(18)" }}
          hideTotalCount="false"
          hideColorLegend="false"
          blockSize={15}
          username="drahul97"
        /> */}
      </div>

      {/* Stats */}
      <div className={styles.commits}>
        <img
          id="github-streak-stats"
          className={styles.commit2}
          src="https://github-readme-streak-stats.herokuapp.com/?user=dRahul97&theme=radical&hide_border=false"
          // src="https://github-readme-streak-stats.herokuapp.com?user=dRahul97&theme=radical&hide_border=false"(previous one)
          // [![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=dRahul97&theme=radical&hide_border=true)](https://git.io/streak-stats)
          alt=""
        />

        <img
          id="github-top-langs"
          className={styles.commit3}
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=drahul97&theme=radical&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
          // src="https://github-readme-stats.vercel.app/api/top-langs/?username=dRahul97&theme=radical&hide_border=false&include_all_commits=false&count_private=false&layout=compact"(previous one)
          alt=""
        />
        <img
          id="github-stats-card"
          className={styles.commit1}
          src="https://github-readme-stats.vercel.app/api?username=drahul97&theme=radical&hide_border=false&include_all_commits=true&count_private=true"
          // src="https://github-readme-stats.vercel.app/api?username=dRahul97&theme=radical&hide_border=false&include_all_commits=true&count_private=true"(previous one)
          alt=""
        />
      </div>
    </div>
  );
};

export default GitStats;
