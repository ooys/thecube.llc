import React, { Component } from 'react';
import styled from 'styled-components';

const ContainerBody = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    animation: fadeIn 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const TitleDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 200px;
`;

const T1 = styled.div`
    font-family: Circular;
    font-size: 90px;
    color: #333333;
`;

const T2 = styled.div`
    font-family: HKGrotesk;
    font-size: 50px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 15px;
`;

const T3 = styled.div`
    font-family: HKGrotesk;
    font-size: 35px;
    font-weight: 600;
    color: #555555;
`;

const T4 = styled.div`
    font-family: HKGrotesk;
    font-size: 25px;
    font-weight: 500;
    color: #333333;
`;

const PersonTable = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 75px;
`;

const PersonContainer = styled.div`
    width: 200px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const PersonImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
`;

class Members extends Component {
    render() {
        return (
            <ContainerBody>
                <TitleDiv>
                    <T1>Members</T1>
                    <T3>Say hi to us anywhere, anytime!</T3>
                </TitleDiv>
                <div style={{ height: '250px' }} />
                <T2>Class of 2021</T2>
                <PersonTable>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                </PersonTable>
                <T2>Class of 2022</T2>
                <PersonTable>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                </PersonTable>
                <T2>Class of 2023</T2>
                <PersonTable>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                    <PersonContainer>
                        <PersonImage src='https://media-exp1.licdn.com/dms/image/C4E03AQF7p1442fBquA/profile-displayphoto-shrink_200_200/0?e=1608163200&v=beta&t=fxW80CWxVRvchMxkXame5bQDIYCM96Gty6dSy5y8IVg' />
                        <T4>Raymond Chen</T4>
                    </PersonContainer>
                </PersonTable>
            </ContainerBody>
        );
    }
}

export default Members;
