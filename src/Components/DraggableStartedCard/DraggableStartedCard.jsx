import React from 'react';
import { useDrag } from 'react-dnd';
import StartedCard from '../StartedCard/StartedCard';

const DraggableStartedCard = ({ _id, ...props }) => {
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: 'STARTED_TASK',
        item: { _id },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      }));
      
    return (
     <div ref={dragRef} style={{ opacity: isDragging ? 0.5 : 1 }}>
        <StartedCard {...props} />
      </div>
    );
};

export default DraggableStartedCard;