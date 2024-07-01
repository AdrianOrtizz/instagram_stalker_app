import styles from "./loading.module.scss";
const Loading = () => {
  return (
    <section className={styles.loadingContainer}>
      <img
        className="w-16 m-auto"
        src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif"
        alt="gif cargando"
      />
      <h4 className="text-center my-12">
        Esto puede demorar algunos segundos...
      </h4>
    </section>
  );
};

export default Loading;
