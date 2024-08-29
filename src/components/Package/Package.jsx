import Button from '../Buttons/Button';
import styles from './Package.module.scss';

const Package = () => {
  return (
    <div className={styles.packageContainer}>
      <h3 className={styles.header}>Packages</h3>
      <div className={styles.packageBtnContainer}>
        <Button
          className={styles.packageBtn}
          text={'Standard'}
        />
        <Button
          className={styles.packageBtn}
          text={'Pro'}
        />
        <Button
          className={styles.packageBtn}
          text={'Custom'}
        />
      </div>
      <h3 className={styles.price}>
        Price
        <span className={styles.value}>$40</span>
      </h3>
      <h3 className={styles.header}>Description</h3>
      <p className={styles.desc}>
        Are you seeking captivating and well-researched content that resonates
        with your audience? Look no further! I offer expert content writing
        services tailored to your specific needs. Whether you need SEO-optimized
        blog posts, informative articles, or engaging website content, I deliver
        compelling writing that drives traffic and enhances your brand's online
        presence. Services Include: SEO-friendly blog posts and articles
        Engaging website content Research-driven writing on diverse topics
        Customized content to match your tone and style Why Choose Me? With a
        background in [your relevant expertise or experience], I bring [specific
        skills or qualities] to every project. I ensure timely delivery without
        compromising on quality. Let's collaborate to elevate your content
        strategy and achieve your goals.
      </p>
      <h3 className={styles.header}>Duration</h3>
      <p>Flexible, depending on project scope and requirements.</p>
      <Button text={'Order'} />
    </div>
  );
};

export default Package;
