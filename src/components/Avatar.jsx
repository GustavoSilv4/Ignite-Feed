import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, avatar }) { // Possivel dar valores padrões para um prop desestruturada utilizando o = valor padrao.
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={avatar}

        />
    )
}