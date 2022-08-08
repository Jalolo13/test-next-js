import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";
import styles from "../../styles/user.module.sass";

export default function User({ user }) {
    const { query } = useRouter();
    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                Пользователь с id {query.id}
                <h2>Имя {user.name}</h2>
            </div>
        </MainContainer>
    );
}

export async function getServerSideProps({ params }) {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const user = await res.json();
    return {
        props: { user },
    };
}
