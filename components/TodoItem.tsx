import React from 'react';
import { Button } from './ui/button';
import Checkbox from './ui/checkbox';
import DeleteIcon from '@/assets/icons/DeleteIcon';
import { motion } from 'framer-motion';

interface TodoItemProps {
    todo: { id: number; text: string; completed: boolean };
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
    return (
        <motion.div
            className='w-full flex justify-between border-[0.1px] rounded-lg py-1'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
        >
            <div className='flex items-center w-full px-2'>
                <Checkbox
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                />
                <span className={`flex-1 font-garet-book text-sm my-[1px] mx-3 overflow-hidden ${todo.completed && 'text-slate-400'}`} style={{ whiteSpace: 'normal', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                    {todo.text} {todo.completed && <span className='text-slate-400'>(Done)</span>}
                </span>
                <Button className='px-0 bg-transparent hover:bg-transparent flex items-center' onClick={() => onDelete(todo.id)}>
                    <DeleteIcon width={24} height={24} color='#fff' thickness={1} />
                </Button>
            </div>
        </motion.div>
    );
};

export default TodoItem;
