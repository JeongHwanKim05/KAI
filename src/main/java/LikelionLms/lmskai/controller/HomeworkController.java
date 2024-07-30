package LikelionLms.lmskai.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@Slf4j
public class HomeworkController {
    @RequestMapping("localhost:8080")
    public String home(){
        return "homework.html";
    }

    //파일 경로확인해서 삽입하는게 좀 헷갈려서 세션 떄 여쭈어봐도 괜찮을까요..?
    //이거 혼자 하다 틀리면 고치는게 더 힘들어 보여서요 ㅜㅜ
}