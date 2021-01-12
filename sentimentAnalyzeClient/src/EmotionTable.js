import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      return (  
        <div>
          {/*You can remove this line and the line below. */}
          {JSON.stringify(this.props.emotions)}
          <table className="table table-bordered">
            <tbody>
            {
                this.props.jobList.length > 0 &&  this.props.jobList.content.map(function (item, key) {
                  return (
                    <tr key={key}>
                      <td>RED</td>
                      <td>GREEN</td>
                      <td>ORANGE</td>
                    </tr>
                  )
                })
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;
