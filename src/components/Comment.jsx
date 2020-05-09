import React, { useContext } from 'react';
import { StoreContext } from '../app';
import { useObserver } from 'mobx-react';



const Comment = () =>{

    const store = useContext(StoreContext);

    return  useObserver(()=>(
        <table className="table">
            <tbody>
            {
                store.comment.map((comment, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                {comment}
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    ))
};


export default  Comment;



