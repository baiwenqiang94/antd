import React,{Component} from 'react';
import { DatePicker } from 'antd';

class Hmq extends Component {
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  disabledStartDate = (startValue) => {
    const endValue = this.state.endValue;
    console.log(startValue.valueOf());
    //debugger 断点方法
    if (!startValue || !endValue) {
        return startValue.valueOf() > new Date().getTime();
    }
    return startValue.valueOf() > endValue.valueOf();
  }

  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return endValue.valueOf() > new Date().getTime()
    }
    if(startValue){
        return endValue.valueOf() <= startValue.valueOf() || 
        endValue.valueOf() >= new Date().getTime()||endValue.valueOf()-startValue.valueOf()>=30*24*3600*1000;
    }
    return endValue.valueOf() >= startValue.valueOf() || endValue.valueOf() < new Date().getTime();
  }

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  }

  onStartChange = (value) => {
    this.onChange('startValue', value);
  }

  onEndChange = (value) => {
    this.onChange('endValue', value);
  }

  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  }

  handleEndOpenChange = (open) => {
    this.setState({ endOpen: open });
  }

  render() {
    const { startValue, endValue, endOpen } = this.state;
    return (
      <div>
        <DatePicker
          disabledDate={this.disabledStartDate}
          format="YYYY-MM-DD"
          value={startValue}
          placeholder="Start"
          onChange={this.onStartChange}
          onOpenChange={this.handleStartOpenChange}
          showToday={false}
        />
        <DatePicker
          disabledDate={this.disabledEndDate}
          format="YYYY-MM-DD"
          value={endValue}
          placeholder="End"
          onChange={this.onEndChange}
          open={endOpen}
          onOpenChange={this.handleEndOpenChange}
          showToday={false}
        />
      </div>
    );
  }
}

export default Hmq