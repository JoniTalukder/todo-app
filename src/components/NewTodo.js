import React from 'react'

const NewTodo = () => {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="title"></label>
                    <input type="text" name="title" id="title" />
                </div>
                <div>
                    <label htmlFor="desc"></label>
                    <textarea type="text" name="desc" id="desc" />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewTodo