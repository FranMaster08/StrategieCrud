const httpManger = function() {
    this.strategy = null
    this.setStrategy=(strategy)=>{
        this.strategy = strategy
    };
    this.get=async (options)=>await this.strategy.get(options)
    this.post=async (options)=>await this.strategy.post(options)
    this.put=async (options)=>await this.strategy.put(options)
    this.delete=async (options)=>await this.strategy.delete(options)
}

module.exports = httpManger