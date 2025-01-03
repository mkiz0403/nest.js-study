import { Body, Controller, Get, Post, Param, Delete, Patch} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './boards.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService : BoardsService){}

    @Get('/')
    getAllBoard(): Board[]{
        return this.boardsService.getAllBoards();
    }

    @Post()
    createBoard(
        @Body() createBoardreateBoardDto : CreateBoardDto
    ) : Board {
        return this.boardsService.createBoard(createBoardreateBoardDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id : string) : Board{
        return this.boardsService.getBoardById(id);
    }

    @Delete('/:id')
    deleteBoardById(@Param('id') id : string) : void { // 리턴값이 없을 경우 void 사용
        this.boardsService.deleteBoardByid(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id : string,
        @Body('status') status : BoardStatus,
    ) : Board {
        return this.boardsService.updateBoardStatus(id, status);
    }
}
