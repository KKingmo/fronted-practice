import * as React from "react";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonIcon from "@mui/icons-material/Person";
import { Wrapper, Head, Search, My, HeadNav, Main, ListItem, Footer } from "./css.js";

export default function IndexPage() {
    const [value, setValue] = React.useState(0);
    return (
        <>
            <Wrapper>
                <Head>
                    <Search>
                        <SearchIcon />
                    </Search>
                    <My>
                        <div>
                            <span>마이</span>
                        </div>
                        <div>
                            <Avatar src="https://cdn.pixabay.com/photo/2016/01/18/05/09/woman-1146038_1280.jpg"></Avatar>
                            <span>임정아</span>
                            <span>〉</span>
                        </div>
                    </My>
                    <HeadNav>
                        <div>
                            <span>공지사항</span>
                        </div>
                        <div>
                            <span>이벤트</span>
                        </div>
                        <div>
                            <span>FAQ</span>
                        </div>
                        <div>
                            <span>Q&A</span>
                        </div>
                    </HeadNav>
                </Head>
                <Main>
                    <ListItem>
                        <div>
                            <div>
                                <span>Q.01</span>
                            </div>

                            <div>
                                <span>리뷰 작성은 어떻게 하나요?</span>
                            </div>
                        </div>
                        <div>
                            <span>⌵</span>
                        </div>
                    </ListItem>
                    <ListItem>
                        <div>
                            <div>
                                <span>Q.02</span>
                            </div>

                            <div>
                                <span>리뷰 수정/삭제는 어떻게 하나요?</span>
                            </div>
                        </div>
                        <div>
                            <span>⌵</span>
                        </div>
                    </ListItem>
                    <ListItem>
                        <div>
                            <div>
                                <span>Q.03</span>
                            </div>

                            <div>
                                <span>아이디/비밀번호를 잊어버렸어요.</span>
                            </div>
                        </div>
                        <div>
                            <span>⌵</span>
                        </div>
                    </ListItem>
                    <ListItem>
                        <div>
                            <div>
                                <span>Q.04</span>
                            </div>

                            <div>
                                <span>회원탈퇴를 하고싶어요.</span>
                            </div>
                        </div>
                        <div>
                            <span>⌵</span>
                        </div>
                    </ListItem>
                    <ListItem>
                        <div>
                            <div>
                                <span>Q.05</span>
                            </div>

                            <div>
                                <span>출발지 설정은 어떻게 하나요?</span>
                            </div>
                        </div>
                        <div>
                            <span>⌵</span>
                        </div>
                    </ListItem>
                    <ListItem>
                        <div>
                            <div>
                                <span>Q.06</span>
                            </div>

                            <div>
                                <span>비밀번호를 변경하고 싶어요.</span>
                            </div>
                        </div>
                        <div>
                            <span>⌵</span>
                        </div>
                    </ListItem>
                </Main>
                <Footer>
                    <Box sx={{ width: 500 }}>
                        <BottomNavigation
                            showLabels
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        >
                            <BottomNavigationAction label="홈" icon={<HomeOutlinedIcon />} />
                            <BottomNavigationAction
                                label="잇츠로드"
                                icon={<LocationOnOutlinedIcon />}
                            />
                            <BottomNavigationAction
                                label="마이찜"
                                icon={<FavoriteBorderOutlinedIcon />}
                            />
                            <BottomNavigationAction label="마이" icon={<PersonIcon />} />
                        </BottomNavigation>
                    </Box>
                </Footer>
            </Wrapper>
        </>
    );
}
