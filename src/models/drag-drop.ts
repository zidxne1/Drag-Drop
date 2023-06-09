// Drag and Drop Interfaces

export interface Draggable {
  dragStartHanlder(event: DragEvent): void;
  dragEndHanlder(event: DragEvent): void;
}

export interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dragHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}
