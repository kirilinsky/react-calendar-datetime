import classNames from "classnames";
import moment from "moment";

const Months = ({ date, changeAction }) => {
  const setMonth = (num) => {
    if (num + 1 == moment(date).format("M")) {
      return;
    }
    changeAction(moment(date).month(num));
  };

  let monthsField = Array.from({ length: 12 }, (x, i) => i);

  return (
    <div className="calendar-months">
      {monthsField.map((x) => (
        <div
          key={x}
          tabIndex="0"
          role="button"
          className={classNames("calendar-months-month", {
            calendar_active: x + 1 === +moment(date).format("M"),
          })}
          onClick={() => setMonth(x)}
        >
          {moment().month(x).format("MMMM")}
        </div>
      ))}
    </div>
  );
};

export default Months;
