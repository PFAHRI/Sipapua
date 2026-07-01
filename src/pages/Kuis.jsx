import { useState } from 'react';
import './Kuis.css';

const quizData = [
  {
    question: 'Berapa perkiraan jumlah suku bangsa asli yang mendiami pulau Papua?',
    options: ['Sekitar 50 Suku', 'Sekitar 100 Suku', 'Lebih dari 250 Suku', 'Hanya 10 Suku'],
    answer: 'Lebih dari 250 Suku',
    explanation: 'Papua sangat majemuk dan dihuni oleh lebih dari 250 kelompok suku bangsa asli dengan bahasa yang berbeda-beda.'
  },
  {
    question: 'Apa nama tas tradisional anyaman Papua yang diakui sebagai warisan budaya oleh UNESCO?',
    options: ['Noken', 'Tifa', 'Honai', 'Koteka'],
    answer: 'Noken',
    explanation: 'Noken adalah tas tradisional Papua yang dibawa dengan kepala, melambangkan kehidupan dan kesuburan.'
  },
  {
    question: 'Berdasarkan jurnal Nature (2020), berapa perkiraan jumlah spesies tumbuhan di Papua?',
    options: ['Sekitar 1.500 Spesies', 'Sekitar 5.000 Spesies', 'Sekitar 13.600 Spesies', 'Kurang dari 500 Spesies'],
    answer: 'Sekitar 13.600 Spesies',
    explanation: 'Penelitian global membuktikan Papua memiliki 13.634 spesies tumbuhan, menjadikannya pulau dengan keanekaragaman flora tertinggi di dunia.'
  },
  {
    question: 'Apa nama rumah adat tradisional Suku Dani yang terletak di Lembah Baliem?',
    options: ['Kariwari', 'Honai', 'Ebai', 'Wamai'],
    answer: 'Honai',
    explanation: 'Honai adalah rumah adat berbentuk bulat dengan atap jerami yang dirancang untuk menahan dinginnya suhu pegunungan.'
  },
  {
    question: 'Taman Nasional apa di Papua yang memiliki ekosistem lengkap dari pesisir hingga gletser salju?',
    options: ['Taman Nasional Wasur', 'Taman Nasional Teluk Cenderawasih', 'Taman Nasional Lorentz', 'Taman Nasional Komodo'],
    answer: 'Taman Nasional Lorentz',
    explanation: 'Taman Nasional Lorentz adalah Situs Warisan Dunia UNESCO dengan ekosistem terlengkap di Asia Tenggara.'
  }
];

const Kuis = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    setIsAnswered(true);

    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer('');
    setIsAnswered(false);
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer('');
    setIsAnswered(false);
  };

  return (
    <div className="kuis-page container section-padding">
      <div className="kuis-header">
        <h1 className="page-title">Kuis Edukasi Etnografi</h1>
        <p className="page-subtitle">Uji pengetahuan Anda tentang kebudayaan dan kekayaan alam Papua!</p>
      </div>

      <div className="kuis-container">
        {showScore ? (
          <div className="score-section">
            <h2>Kuis Selesai! 🎉</h2>
            <div className="score-circle">
              <span className="score-number">{score}</span>
              <span className="score-total">/ {quizData.length}</span>
            </div>
            <p className="score-message">
              {score === quizData.length ? 'Luar biasa! Anda adalah ahli Etnografi Papua.' : 
               score >= 3 ? 'Bagus sekali! Pengetahuan Anda tentang Papua cukup luas.' : 
               'Teruslah belajar dan menjelajahi kekayaan Papua di web ini!'}
            </p>
            <button className="btn btn-primary btn-reset" onClick={resetQuiz}>
              Mainkan Lagi
            </button>
          </div>
        ) : (
          <div className="question-section">
            <div className="question-count">
              <span>Pertanyaan {currentQuestion + 1}</span> / {quizData.length}
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${((currentQuestion) / quizData.length) * 100}%` }}
              ></div>
            </div>
            
            <h3 className="question-text">{quizData[currentQuestion].question}</h3>
            
            <div className="answer-section">
              {quizData[currentQuestion].options.map((option, index) => {
                let buttonClass = 'btn-answer';
                if (isAnswered) {
                  if (option === quizData[currentQuestion].answer) {
                    buttonClass += ' correct';
                  } else if (option === selectedAnswer) {
                    buttonClass += ' incorrect';
                  }
                }

                return (
                  <button 
                    key={index} 
                    className={buttonClass}
                    onClick={() => handleAnswerClick(option)}
                    disabled={isAnswered}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div className="explanation-box fade-in">
                <h4>{selectedAnswer === quizData[currentQuestion].answer ? '✅ Jawaban Benar!' : '❌ Jawaban Kurang Tepat'}</h4>
                <p>{quizData[currentQuestion].explanation}</p>
                <button className="btn btn-primary btn-next" onClick={handleNextQuestion}>
                  {currentQuestion === quizData.length - 1 ? 'Lihat Hasil' : 'Pertanyaan Selanjutnya ➔'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Kuis;
