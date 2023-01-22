function Contacts(contacts) {
  const element = contacts.map(el => <li>{el}</li>);
  return <ul>{element}</ul>;
  //   function Statistics({ title, stats }) {
  //   const element = stats.map(({ id, label, percentage }) => (
  //     <li
  //       key={id}
  //       className={styles.item}
  //       style={{
  //         backgroundColor: getRandomHexColor(),
  //       }}
  //     >
  //       <span className={styles.label}>{label}</span>
  //       <span className={styles.percentage}>{percentage}</span>
  //     </li>
  //   ));
  //   return (
  //     <section className={styles.statistics}>
  //       {title && <h2 className={styles.title}>{title}</h2>}
  //       <ul className={styles.statList}>{element}</ul>
  //     </section>
  //   );
  // }
}

export default Contacts;
