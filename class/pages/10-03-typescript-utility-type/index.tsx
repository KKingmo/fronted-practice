export default function TypeScriptPage() {
    interface IProfile {
        name: string;
        age: number;
        school: string;
        hobby?: string;
    }

    // 1. Pick 타입
    type Mytype1 = Pick<IProfile, "name" | "age">;

    // 2. Omit 타입
    type Mytype2 = Omit<IProfile, "school">;

    // 3. Partial 타입
    type Mytype3 = Partial<IProfile>;

    // 4. Required 타입
    type Mytype4 = Required<IProfile>;

    // 5. Recode 타입(정해놓은 문자만 사용 가능하다.)
    type ZZZ = "aaa" | "qqq" | "rrr"; // Union 타입

    let apple: ZZZ;
    // 정해놓은 문자만 입력 가능한 것은 Union Type이라 한다.
    // apple = "qqq";

    // ZZZ의 요소가 key , IProfile이 value가 된다.
    type Mytype5 = Record<ZZZ, IProfile>;

    // ===== 추가(선언병합) - (type과 interface의 차이점) =====
    // 위의 IProfile 와 자동으로 합쳐진다.
    interface IProfile {
        candy: number;
    }

    let profile: IProfile;
    profile = {
        candy: 3,
        age: 10,
        hobby: "asdf",
    };

    return <div>asddfsadasf</div>;
}
