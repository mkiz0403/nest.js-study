import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    private boards : Board[] = []; // 다른곳에서 boards 배열을 수정할 수 없도록 private로 선언

    getAllBoards() : Board[]{
        return this.boards;
    }
    createBoard(createBoardDto : CreateBoardDto){
        const {title, description} = createBoardDto;
        const board : Board = {
            id : uuid(),
            title,
            description,
            status:BoardStatus.PUBLIC
        }

        this.boards.push(board);
        return board;
    }

    getBoardById(id : string) : Board{
        return this.boards.find((board) => board.id === id);
    }

    deleteBoardByid(id : string) : void {
        this.boards  = this.boards.filter((board) => board.id !== id);
    }

    updateBoardStatus(id : string, status : BoardStatus) : Board {
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }
}
