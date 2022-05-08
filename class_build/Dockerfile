FROM node:14

# RUN mkdir class_build 굳이 따로 만들필요 없음
WORKDIR /class_build/
COPY . /class_build/

RUN yarn install
RUN yarn build:ssr
#  RUN은 원하는 대로 마음 껏 사용가능하다.
# RUN yarn start
#  CMD는 한 번밖에 못 쓴다
CMD yarn start

# 도커파일 자체도 빌드해줘야 하는데 도커파일을 빌드하면 하나의 이미지로 나온다.
# 시디 굽는 것과 같이 생각하면 되는데 여기서 이미지는 하나의 압축된 파일을 뜻한다.
# 즉 빌드를해서 압축해놓고 압축해놓은 파일을 한방에 실행하는 것이다.
# 여기서 RUN yarn start와 같이 24시간 실행하라는 명령어는 RUN에 들어갈 수 없다.
# CMD 는 압축할 때 배제하기 때문에 yarn start는 CMD 명령어로 입력해야한다.