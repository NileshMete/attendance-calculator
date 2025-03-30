import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './App.css';

function AttendanceCalculator() {
  const [totalLectures, setTotalLectures] = useState("");
  const [present, setPresent] = useState("");
  const [absent, setAbsent] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Handle window resize for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Convert inputs to numbers
  const total = Number(totalLectures) || 0;
  const presentNum = Number(present) || 0;
  const absentNum = Number(absent) || 0;

  // Calculations
  const remainingLectures = total - (presentNum + absentNum);
  const attendancePercentage = total > 0 ? (presentNum / total * 100).toFixed(2) : 0;
  
  // Confetti effect when attendance >= 75%
  useEffect(() => {
    if (attendancePercentage >= 75 && total > 0) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
    return () => setShowConfetti(false);
  }, [attendancePercentage, total]);

  const calculateSafeAbsences = () => {
    if (total === 0) return 0;
    const minPresentFor75 = Math.ceil(total * 0.75);
    return Math.max(total - minPresentFor75 - absentNum, 0);
  };

  return (
    <div className="app-container">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={400}
          gravity={0.2}
        />
      )}

      <div className="calculator-card">
        <h1 className="title">🎯 Attendance Calculator</h1>
        
        <div className="input-group">
          <label>Total Lectures</label>
          <input
            type="number"
            value={totalLectures}
            onChange={(e) => setTotalLectures(e.target.value.replace(/[^0-9]/g, ''))}
            min="0"
            placeholder="e.g. 100"
            className="input-field"
          />
        </div>
        
        <div className="input-group">
          <label>Present Lectures</label>
          <input
            type="number"
            value={present}
            onChange={(e) => setPresent(e.target.value.replace(/[^0-9]/g, ''))}
            min="0"
            placeholder="e.g. 80"
            className="input-field"
          />
        </div>
        
        <div className="input-group">
          <label>Absent Lectures</label>
          <input
            type="number"
            value={absent}
            onChange={(e) => setAbsent(e.target.value.replace(/[^0-9]/g, ''))}
            min="0"
            placeholder="e.g. 10"
            className="input-field"
          />
        </div>
        
        <div className="results-container">
          <h3>Your Attendance Summary</h3>
          
          <div className="result-row">
            <span>Remaining Lectures:</span>
            <span className="highlight">{remainingLectures}</span>
          </div>
          
          <div className="result-row">
            <span>Current Attendance:</span>
            <span className={`highlight ${attendancePercentage >= 75 ? 'success' : 'warning'}`}>
              {attendancePercentage}%
            </span>
          </div>
          
          <div className="result-row">
            <span>Safe Absences Left:</span>
            <span className="highlight">{calculateSafeAbsences()}</span>
          </div>
          
          <div className={`status-banner ${attendancePercentage >= 75 ? 'success' : 'warning'}`}>
            {attendancePercentage >= 75 ? (
              <>
                🎉 Excellent! You're above 75%
              </>
            ) : (
              <>
                ⚠️ Attend {Math.ceil(total * 0.75 - presentNum)} more to reach 75%
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceCalculator;