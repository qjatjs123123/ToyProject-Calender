# 구글 캘린더

구글 캘린더 코딩 프로젝트

https://google-calen.netlify.app/

<br />

## 🚀 프로젝트 개요

개인 프로젝트 입니다. <br />
`React`, `Redux`, `Redux-toolkit`, `classnames` 등 라이브러리를 학습하고, 각각을 왜 사용하는지와 장단점을 더 깊이 이해하기 위해 직접 프로젝트를 기획했습니다. 

<br />

## ⚙ 내가 사용한 기술 스택

<div>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/classnames-000000?style=for-the-badge&logo=css3&logoColor=white" />
</div>

<br />

## 📚 왜 이 라이브러리를 사용했나?
### `Redux-toolkit`
#### WHY? 👍
- 다양한 상태를 전역에서 관리해야 하고, 상태 변경 로직이 복잡함
  - Datepicker에 의해 실시간으로 변경되는 날짜 데이터를 전역에서 공유해야 함  
  - 달력을 일/주/월/년 단위 등 다양한 모드 상태로 전역에서 관리해야 함  
  - TodoList는 API가 없으므로 전역 상태로 관리  
- Redux의 단점인 보일러 플레이트 감소
- 불변성 관리 자동화
- 상태를 context에 맞게 slice하여 코드 응집화

`정리하자면, 복잡한 상태 관리를 위해서 redux를 사용` <br />
`코드 가독성, 보일러 플레이트 감소, 응집화 등 개발자 경험성(DX)를 높이기 위해 redux-toolkit을 사용` <br />

##

### `classnames`
#### WHY? 👍
- Atomic 패턴으로 의존성이 낮고 재사용 가능한 컴포넌트 설계  
  - props 기반으로 유동적인 옵션 제어  
  - classnames 라이브러리로 조건부 클래스 적용 → 코드 가독성과 유지보수성 향상

`정리하자면, 많은 props를 코드 가독성있게 제어하기 위해서 사용` <br />

##

## 개발하면서 고민한 내용
### 📝 어떻게 하면 복잡한 전역 상태를 잘 관리할 수 있을까?
### redux-toolkit을 사용하자
> 캘린더 특성상 넓은 범위의 컴포넌트에서 `mode`, `date`, `todo` 등의 상태를 공유해야 했습니다.  
> 이때 Redux Toolkit을 사용하면 slice 단위로 상태를 관리하고, 액션과 리듀서를 간편하게 정의할 수 있어 복잡한 전역 상태도 깔끔하게 관리할 수 있었습니다.

<br />

### 📝 페이지마다 일관된 UI를 만들려면 어떻게 해야 할까?
### Atomic 패턴을 사용하자
> 제가 내린 결론은 Atomic 패턴을 사용하자 입니다. <br />
> Atomic 패턴은 먼저 쪼갤 수 없는 가장 작은 단위 (Button, Text, Input) 등을 만들고 이를 조합해 점진적으로 확장합니다.  <br />
> 즉 협업 시에도 공통 컴포넌트를 제대로 잘 설계해 놓으면, 개발자는 일관된 UI를 만들 수 있고,  <br />
> 각자의 새로운 컴포넌트 만들 필요없이 공통 컴포넌트를 재사용할 수 있게 됩니다.  <br />

<br />

### 📝 1. 의존성이 적은 코드란?
### 슬롯 컴포넌트 패턴을 사용하자
> 슬롯이란 특정 위치 (left, right, bottom, center) 등 특정 컴포넌트 위치에 컴포넌트를 랜더링 하는 방법입니다.  <br />
> 제가 직접 만든 Header에 슬롯 컴포넌트 패턴을 적용했습니다.   <br />
> Header 컴포넌트 안에 left 영역과 right 영역을 두어 유연하게 컴포넌트를 배치할 수 있습니다. <br />
> Header 자체는 재사용 가능하고 각 페이지마다 다른 내용을 쉽게 넣을 수 있게 됩니다.

<br />

### 📝 2. 의존성이 적은 코드란 ?
### 컴포넌트를 children이나 props로 제어하자
> 컴포넌트를 유연하게 만들려면 내부 내용을 children으로 전달하거나, props를 통해 동적으로 제어할 수 있습니다. <br />
> 저는 DatePicker 컴포넌트를 children 방식으로 유연하게 설계했습니다. <br />
> DatePicker 내부에는 크게, Title, ContentHeader, Content, ContentFooter로 설계했습니다. <br />
> 특정 페이지에서 DatePicker의 Title 부분을 제외하고 싶다면, children으로 해당 부분을 전달하지 않으면 됩니다. <br />

<br />

### 📝 3. 의존성이 적은 코드란 ?
### 커스텀 훅을 사용하자
> 커스텀 훅을 사용하면 의존성이 낮아집니다.  <br />
> 일단 먼저, UI와 로직을 분리할 수 있어 컴포넌트는 UI에만 집중할 수 있게 됩니다.  <br />
> 또한 커스텀 훅을 통해 로직을 재사용할 수 있습니다.  <br />
> 모달 닫는 로직에 커스텀 훅을 사용하였습니다. 그 결과 페이지마다 발생하는 모달 컴포넌트에 커스텀 훅을 사용하여 재사용할 수 있었습니다.  <br />

<br />

# 배운점
> 복잡한 전역 상태를 사용해야 하는 프로젝트는 redux-toolkit을 사용하는 것이 효과적이라는 것을 배웠습니다. <br />
> 의존성이 낮고, 클린한 컴포넌트를 만들기 위해 외부로 부터 컴포넌트, state를 주입하고 제어권을 넘겼습니다. <br />
> 



<br />

## 기술 블로그

- [Atomic 디자인](https://qjatjs123123.tistory.com/62)
- [React에서 IoC 활용하기](https://qjatjs123123.tistory.com/63)
- [커스텀 훅으로 로직 재사용하기](https://qjatjs123123.tistory.com/64)
