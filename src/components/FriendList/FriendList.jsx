import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return (
        <section>
            {friends.map(({avatar, name, isOnline, id}) =>
                (
                <li key={id} className={css.item}>
                    <span className={isOnline ? (css.green) : (css.red)}></span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
                </li>
                ))}
        </section>
    )
}

FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
}