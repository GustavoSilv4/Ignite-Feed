import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';


export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState([
        'Parabéns cara, caramba!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })



    const handleCreateComment = () => {
        event.preventDefault();

        setComments([...comments, newCommentText])
        setNewCommentText('')
    };



    const handleNewCommentChange = () => {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value)

    }


    const deleteComment = (commentToDelete) => {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeleteOne);
    }


    const handleNewCommentInvalid = () => {
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar avatar={author.avatar_url} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} >{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {
                    content.map(item => {
                        if (item.type === 'paragraph') {
                            return <p key={item.content}>{item.content}</p>
                        } else if (item.type === 'link') {
                            return <p key={item.content}><a href="">{item.content}</a></p>
                        }
                    })
                }

            </div>

            <form onSubmit={handleCreateComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    name='comment'
                    placeholder='Deixe um comentário'
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return (
                            <Comment
                                key={comment}
                                content={comment}
                                onDeleteComment={deleteComment}
                            />
                        )
                    })
                }
            </div>
        </article>
    )
}